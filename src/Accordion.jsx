import React, { useState, } from 'react';
import data from './data'
import './style.css'

const Accordion = () => {
    const[selected, setSelected] = useState(null);

    function handlesingleSelection(getCurrentId){
        setSelected(getCurrentId === !selected ? null : getCurrentId);
        console.log(selected)
    }


  return (
    <div className='wrapper'>
        <div className='accordion' >
            {data && data.length > 0 ? (data.map((dataItem)=>(
                <div className='item' key={dataItem.id}>
                    <div onClick={()=>handlesingleSelection(dataItem.id)} className='title'>
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ? 
                        <div className='content'>{dataItem.answer}</div>
                        : null
                    }
                </div>
            ))) : (
            <div>No data found </div>)}
        </div>
    </div>
  );
}

export default Accordion