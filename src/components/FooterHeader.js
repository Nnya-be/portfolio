import React from 'react'

function FooterHeader(props) {
  return (
    <>
        <h4 style={{
            fontSize:'1.6em',
            fontWeight:'200'
        }}>
        {props.heading}
        </h4>
    </>
  )
}

export default FooterHeader