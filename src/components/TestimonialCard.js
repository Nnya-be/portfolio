import React from 'react'

const TestimonialCard = (props) => {
    const details = props.value;
  return (
    <div style={{
        color:'white',
        height:'24em',
        width:'18em',
        display:'flex',
        flexDirection:'column',
        alignItems:"left",
        justifyContent:'space-between'
    }}>
        <span style={{
            fontSize:'5em',
            textAlign:"start"
        }}>
            &ldquo;
        </span>
        <p style={{
            textAlign:"start",
            padding: '0em 0em 1.5em 0em'
        }}>
        {details.body} 
        </p>
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems: 'left'
        }
        }>
            <span style={{
                fontSize:'1.4em',
                textAlign:'start'
            }}
            >{details.name}</span>
            <span style={{
                textAlign:'start'
            }}
            >{details.role}</span>
        </div>
    </div>
  )
}

export default TestimonialCard