import React from 'react'

function SecondaryHeader(props) {
  return (
    <>
        <h2 style={{
            fontSize:'2.4em',
            marginBottom:'1em',
            textAlign:'start'
            }}>
            {props.value}
        </h2>
    </>
  )
}

export default SecondaryHeader