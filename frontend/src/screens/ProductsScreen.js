import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {saveProduct, signin} from '../actions/productActions'
function ProductsScreen (props) {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    const dispatch = useDispatch();

    useEffect(() => {
     
        return () => {
            //
        }
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({name, price, image, brand, category, countInStock, description}));
    }
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Create Product</h2>
                </li>
                <li>
                    {loadingSave && <div>Loading...</div>}
                    {errorSave && <div>{errorSave}</div>}
                </li>
                <li>
                    <label htmlFor='name'>
                        Name
                    </label>
                    <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor='price'>
                        Price
                    </label>
                    <input type="text" id="price" name="price" onChange={(e) => setPrice(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor='image'>
                        Image
                    </label>
                    <input type="text" id="image" name="image" onChange={(e) => setImage(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor='brand'>
                        Brand
                    </label>
                    <input type="text" id="brand" name="brand" onChange={(e) => setBrand(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor='category'>
                        Category
                    </label>
                    <input type="text" id="category" name="category" onChange={(e) => setCategory(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor='countinstock'>
                        CountInStock
                    </label>
                    <input type="text" id="countinstock" name="countinstock" onChange={(e) => setCountInStock(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor='description'>
                        Description
                    </label>
                    <textarea type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </li>
                <li>
                    <button type="submit" className='button primary'>Create</button>
                </li>
            </ul>
        </form>
    </div>



}
export default ProductsScreen;