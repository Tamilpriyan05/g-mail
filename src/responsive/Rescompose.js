import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./rescompose.css"
import { useDispatch } from 'react-redux'
import { composestatus } from '../slice/statusSlice'

const Rescompose = () => {
    const dispatch =useDispatch()
  return (
    <div className='rescompose_box'>
        <button onClick={() => dispatch(composestatus(true))}>
            <span>
               <FontAwesomeIcon icon={faPen} />
            </span>
            Compose
        </button>
    </div>
  )
}

export default Rescompose