import React, { useState, useRef, useEffect } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="space-y-2">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: activeIndex === index,
          onClick: () => toggleAccordion(index),
        }),
      )}
    </div>
  )
}

const AccordionItem = ({ isActive, onClick, children }) => {
  const headerChild = React.Children.toArray(children).find((child) => {
    return React.isValidElement(child) && child.type.name === 'AccordionHeader'
  })

  const bodyChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type.name === 'AccordionBody',
  )
  return (
    <div className="rounded p-2 monokai-bg-black-2 shadow-lg">
      <div className="flex items-center justify-between cursor-pointer" onClick={onClick}>
        {headerChild}
        {isActive ? <FiChevronUp className="ms-2 w-5 h-5" /> : <FiChevronDown className="ms-2 w-5 h-5" />}
      </div>
      {React.Children.map(bodyChildren, (child) => React.cloneElement(child, { isActive }))}
    </div>
  )
}

const AccordionHeader = ({ children }) => <h3 className="w-full">{children}</h3>

const AccordionBody = ({ isActive, children }) => {
  const bodyRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState(0)
  useEffect(() => {
    setMaxHeight(bodyRef.current.scrollHeight)
  }, [isActive])

  return (
    <div
      ref={bodyRef}
      className="overflow-hidden transition-all duration-300 ease-in-out"
      style={{ maxHeight: isActive ? `${maxHeight}px` : 0 }}
    >
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionHeader, AccordionBody }
