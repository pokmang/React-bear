import React, { useEffect } from 'react'
import BearCard from './BearCard';
import './BearList.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

const BearList = () => {

    const bears = useSelector(state => state.bear);
    const dispatch = useDispatch();

    const getBears = async () => {
        const result = await axios.get(`http://localhost/api/bears`)
        dispatch({ type: 'GET_BEAR', bears: result.data })
    }

    useEffect(() => {
        getBears()
    }, [])

    if (!bears || !bears.length)
        return (<h2>No bears</h2>)

    return (
        <div className='bearlist-container'>
            {
                bears.map((bear, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <BearCard  {...bear} />
                    </div>
                ))
            }
        </div>

    )
}

export default BearList;
