import React from 'react';
import axios from 'axios'
import './BearCard.css';
import { useDispatch, useSelector } from 'react-redux'

const BearCard = props => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)

    const deleteBear = async () => {
        await axios.delete(`http://localhost/api/bears/${props.id}`)
        dispatch({ type: 'DELETE_BEAR', id: props.id })
    }

    const updateBear = async (id) => {
        await axios.put(`http://localhost/api/bears/${props.id}`, form)
        dispatch({ 
            type: 'UPDATE_BEAR', 
            id: props.id, 
            bear: { ...form, id: props.id } })
    }

    return (
        <div className='bearcard-container'>
            <div className='bearcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='bearcard-weight'>{props.weight}</p>
                <p className='bearcard-name'>{props.name}</p>
            </div>
            <div className='bearcard-actions'>
                <div onClick={updateBear}>Update</div>
                <div onClick={deleteBear}>Delete</div>
            </div>
        </div>

    )
}

export default BearCard;