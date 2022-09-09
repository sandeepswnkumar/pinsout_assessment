import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useDispatch } from "react-redux";


const Sidebar = () => {

    const dispatch = useDispatch();

    const [filter, setFilter] = useState({
        category:"",
        price:""
    })
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])

    const handleAPI = async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data)

    }

    const handleChanged = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setFilter({...filter, [name]:value})


    }

    useEffect(() => {
        handleAPI();
    }, [])

    useEffect(() =>{
        products.map((value, index) => {
            if(!category.includes(value.category)){
                category.push(value.category)
                setCategory([...category]);
            }
        })
    },[products])

    useEffect(()=>{
        dispatch({
            type: "category",
            payload:{
                category:filter.category,
                price:filter.price
            }
        })
    },[filter])



    return (
        <div className="col-lg-3 col-md-4">
            {/* <!-- Price Start --> */}
            <h5 className=" position-relative text-uppercase mb-3"><span className=" pr-3">Filter by price</span></h5>
            <div className="bg-light p-4 mb-30">
                <form>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="radio" className="custom-control-input" onChange={handleChanged} name="price" value="AllPrice" defaultChecked id="price-all" />
                        <label className="custom-control-label" htmlFor="price-all">All Price</label>

                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="radio" className="custom-control-input" onChange={handleChanged} value="0-100" name="price" id="price-1" />
                        <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>

                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="radio" className="custom-control-input" onChange={handleChanged} value="100-200" name="price" id="price-2" />
                        <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>

                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="radio" className="custom-control-input" onChange={handleChanged} value="200-300" name="price" id="price-3" />
                        <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>

                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="radio" className="custom-control-input" onChange={handleChanged} value="300-400" name="price" id="price-4" />
                        <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>

                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                        <input type="radio" className="custom-control-input" onChange={handleChanged} value="400-500" name="price" id="price-5" />
                        <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>

                    </div>
                </form>
            </div>
            {/* <!-- Price End --> */}

            {/* <!-- Color Start --> */}
            <h5 className=" position-relative text-uppercase mb-3"><span className=" pr-3">Filter by Category</span></h5>
            <div className="bg-light p-4 mb-30">
                <form>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="radio" className="custom-control-input" onChange={handleChanged} value="AllCategory" name="category" defaultChecked id="all Category" />
                        <label className="custom-control-label" htmlFor="all Category">All Category</label>
                    </div>

                    {
                        category.map((value, index) => (
                            <div key={index} className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="radio" className="custom-control-input" onChange={handleChanged} value={value} name="category" id={value} />
                                <label className="custom-control-label" htmlFor={value}>{value}</label>
                            </div>
                        ))
                    }

                </form>
            </div>
            {/* <!-- Color End --> */}


        </div>
    )
}

export default Sidebar