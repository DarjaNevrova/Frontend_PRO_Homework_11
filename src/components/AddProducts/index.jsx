import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from '../../store/reducer/productsReducer';
import style from './style.module.css'

export default function AddProducts() {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const submit = event => {
        event.preventDefault();
        const newProduct = { id: Date.now(), title, price };
        dispatch(addAction(newProduct));
        setTitle('');
        setPrice('');
        console.log(newProduct)
    };
    
    return (
        <div className={style.form}>
            <form onSubmit={submit}>
                <input className={style.input} type="text" placeholder="Название" value={title} onChange={e => setTitle(e.target.value)} />
                <input className={style.input} type="number" placeholder="Цена" value={price} onChange={e => {
                    if (e.target.value.length <= 8 || e.target.value === '') {
                        setPrice(e.target.value);
                    }
                }} />
                <button className={style.button} type="submit">Добавить</button>
            </form>
        </div>
    );
}