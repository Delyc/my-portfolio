import React, {useState} from 'react'
import Menu from './menu/Menu';
import burger from '../../assets/burger.png'

function Burger() {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div className="App">
        <span className='' onClick={() => setIsOpen(true)}>
          <img className='bg' src={burger} alt="" />
        </span>
        <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
      </div>
    )
}

export default Burger