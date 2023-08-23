import React from 'react'
import styles from './ShortAnswer.css';
function ShortAnswer() {
  return (
    <div className='container fourth'>
        <p>Short Answer<span className='text-danger'>*</span></p>
        <div className="question">
            <input type="text" name="short-answer" id="short-answer" placeholder='Your answer'/>
        </div>
    </div>
  )
}

export default ShortAnswer