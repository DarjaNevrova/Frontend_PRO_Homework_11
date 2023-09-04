import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAction } from '../../store/reducer/productsReducer';
import style from './style.module.css';
import ProductCalculation from '../ProductCalculation';

export default function RemoveProducts() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    if (products.length > 0) {
        return (
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <div className={style.product}>
                            <p className={style.productTitle}>{product.title}</p>
                            <p className={style.productPrice}>{product.price}</p>
                        </div>
                        <ProductCalculation id={product.id} />
                        <button className={style.removeButton} onClick={() => dispatch(removeAction(product.id))}>X</button>
                    </div>
                ))}
            </div>
        );
    }
}
