import React from 'react'

const TestimonialCard = (props) => {
    console.log(props.value);
  return (
    <div style={{
        color:'white',
        height:'20em',
        width:'18em',
        display:'flex',
        flexDirection:'column',
        alignItems:"left",
        // justifyContent:'space-between'
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
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in don't look slightly believable. 
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
            >Precious Amoateng</span>
            <span style={{
                textAlign:'start'
            }}
            >Shoe Shine</span>
        </div>
    </div>
  )
}

export default TestimonialCard