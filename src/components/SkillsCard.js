import React from 'react';
import '../styles/skill_card.scss'
import icon from '../logo.svg'



function SkillsCard(props) {
    const info = props.value;
    // console.log(info)
  return (
    <div className='skills-card' style={{
        backgroundColor:'var(--color-main)',
        height:'17em',
        width:'15em',
        borderRadius:'.8em',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        padding:'.4em'
    }}>
        <img src={icon} alt='icon'
            style={{
                height:'5em',
                width:'5em',
                borderRadius:'10em',
                backgroundColor:'var(--color-secondary-container)'
            }}
        ></img>
        <h3 className='skills-card__heading'>{info.title}</h3>
        <p className='skills-card__text'
            style={{
                textAlign:"center",
                // marginTop:'-1em'
            }}
        >{info.body}</p>
    </div>
  )
}

export default SkillsCard