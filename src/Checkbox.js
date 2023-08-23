import React from 'react'
import styles from './Checkbox.css';
function Checkbox() {
  return (
    <div className='container third'>
        <p>Checkbox<span className='text-danger'>*</span></p>
        <div className="question">
        <div className="label-checkbox-container">
          <input type="checkbox" name="option" value="option1" id="checkbox-option1" />
          <label htmlFor="checkbox-option1">Option 1</label>
        </div>
        <div className="label-checkbox-container">
          <input type="checkbox" name="option" value="option2" id="checkbox-option2" />
          <label htmlFor="checkbox-option2">Option 2</label>
        </div>
        <div className="label-checkbox-container">
          <input type="checkbox" name="option" value="option3" id="checkbox-option3" />
          <label htmlFor="checkbox-option3">Option 3</label>
        </div>
      </div>
    </div>
  )
}

export default Checkbox