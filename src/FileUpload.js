import React from 'react'
import styles from './FileUpload.css';
function FileUpload() {
  return (
    <div className='container seventh'>
        <p>File Upload <span className='text-danger'>*</span></p>
        <input type='file' className='form-control' />
    </div>
  )
}

export default FileUpload