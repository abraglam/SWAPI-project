import React from 'react';

const Chooser = ({dropdown, dropChange}) => {
return (
    <div className='pa2' >
       <select 
       className='pa2'
       name='Pick One'
       defaultValue='default'
       onChange={dropChange}>
           <option value='default' disabled >Pick a category</option>
           <option value='Films'> Films </option>
           <option value='Characters'> Characters </option>
           <option value='Planets'> Planets </option>
       </select>
    </div>
);
}

export default Chooser;