'use client'
import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../_redux/store';
import { decrement, increment } from '../_redux/reducers/numberStateReducer';
import { setCookieCustom } from '../_util/setting';

type Props = {}

const Page = (props: Props) => {
    const number: number = useSelector((state: RootState) => state.numberReducer.number);
    const dispatch: DispatchType = useDispatch();


    
    return (
        <div className='container'>
            Page: {number}
            <div>
                <button className='btn btn-primary me-2' onClick={() => {
                    const action = increment(number + 1);
                    dispatch(action);
                }}>Increase</button>
                <button className='btn btn-primary mx-2' onClick={() => {
                    const action = decrement(number - 1);
                    dispatch(action);

                }}>Decrease</button>
            </div>

           
        </div>
    )
}

export default Page