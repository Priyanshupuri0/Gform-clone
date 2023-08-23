import React from 'react'
import styles from './Paragraph.css';
function ShortAnswer() {
  return (
    <div className='container fifth'>
        <p>ParaGraph<span className='text-danger'>*</span></p>
        <div className="question">
            <input type="text" name="short-answer" id="short-answer" placeholder='Your answer'/>
        </div>
    </div>
  )
}

export default ShortAnswer