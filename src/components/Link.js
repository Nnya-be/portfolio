import React from 'react'

function Link(props) {
    const value = props.value
  return (
    <>
        <li >
        <a className='links' href={value.link} >{value.text}</a>
        </li>
    </>
  )
}

export default Link