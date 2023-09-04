import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAction, increaseAction } from '../../store/reducer/productsReducer';
import style from './style.module.css';

export default function ProductCalculation({ id }) {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    if (products.length > 0) {
        return (
            <div className={style.calculation}>
                <button className={style.decrease} onClick={() => dispatch(decreaseAction(id))}>-</button>
                <button className={style.increase} onClick={() => dispatch(increaseAction(id))}>+</button>
            </div>
        );
    }
}