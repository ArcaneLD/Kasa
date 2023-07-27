/* eslint-disable jsx-a11y/alt-text */
import arrow from '../../assets/arrow.png';

import './collapse.scss'

import { useState } from 'react';

//Display a Collapsable text and handle its events
export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} src={arrow} />
                </h3>
                
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return ( <p>{item}</p> ) }) : content
                    }
                </div> 
            </div>
        </>
    )
}
