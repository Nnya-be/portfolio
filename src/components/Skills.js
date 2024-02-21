import React from 'react'
import SkillsCard from './SkillsCard'
import SecondaryHeader from './SecondaryHeader'
import NavButton from './NavButton'
import "../styles/skills.scss"
const description = 'Experienced software engineer skilled in React, Python, Flask, Express, and Mongoose, with expertise in various development tools for efficiency and quality. Adaptable and committed to staying current with industry trends, I contribute holistically to projects. My seamless integration of frontend and backend, coupled with UI/UX flair and DevOps proficiency, positions me as a valuable asset for diverse teams and projects.';
const skill_info = [
    {
        id: '01',
        title: 'UI/UX Design',
        body: 'Specific emphasis on user interface (UI) and user experience (UX) design.'
    },
    {
        id: '02',
        title: 'Frontend Development',
        body: 'Proficient in React, showcasing expertise in building user-friendly and responsive interfaces.'

    },
    {
        id:'03',
        title:'Backend Development',
        body:' Adept in Flask, and Express, demonstrating strong skills in server-side development and technologies.'
    },
    {
        id:'04',
        title:'DevOps:',
        body:'Mastery in a comprehensive set of development tools, indicating proficiency in DevOps practices.'
    }
]

function Skills() {
  return (
    <div className='skills'>
        <div className='skills-cards'>
        {
            skill_info.map((item) => {
                // console.log(item);
                return <SkillsCard key={item.id} value={item}></SkillsCard>
            })
        }
        </div>
        <div className='skills-info'>
            <SecondaryHeader value='
            Why Hire me for next Project?
            '></SecondaryHeader>
            <p className='skills-info__text'>
                {description}
            </p>
            <NavButton value=''></NavButton>
        </div>
    </div>
  )
}

export default Skills