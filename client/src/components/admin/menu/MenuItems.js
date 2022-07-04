import out from '../../../assets/out.png'
import home from '../../../assets/home.png'
import takequiz from '../../../assets/takequiz.png'
import createquiz from '../../../assets/createquiz.png'
export const items = [
    {itemText: "Education", itemLink: "/", itemIcon:  <img className='icons-side' src={home}
     alt="" />},
    {itemText: "Experience", itemLink: "/take-quiz", itemIcon:  <img className='icons-side' src={takequiz}
    alt="" /> },
    {itemText: "Current", itemLink: "/add-quiz-admin", itemIcon:  <img className='icons-side' src={createquiz}
    alt="" />},
    {itemText: "Interests", itemLink: "/sign", itemIcon:  <img className='icons-side' src={out}
    alt="" />},
    
]