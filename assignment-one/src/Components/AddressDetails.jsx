import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";


const AddressDetails = () => {

    const dispatch = useDispatch()
    const details = useSelector((state) => state.details)
    const Navigate = useNavigate()


    const [addressData, setAddressData] = useState({
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(value){
            e.target.style.backgroundColor="white"
        }
        setAddressData({ ...addressData, [name]: value })
    }

    const handleClick = (e) => {
        e.preventDefault();
        
        const address1 = document.getElementById("address1")
        const address2 = document.getElementById("address2")
        const city = document.getElementById("city")
        const state = document.getElementById("state")
        const country = document.getElementById("country")
        const pincode = document.getElementById("pinCode")

        if (e.target.value === "next") {
            if (!address1.value) {
                address1.style.backgroundColor = "red";
                return;
            }
            if (!address2.value) {
                address2.style.backgroundColor = "red";
                return;
            }
            if (!city.value) {
                city.style.backgroundColor = "red";
                return;
            }
            if (!state.value) {
                state.style.backgroundColor = "red";
                return;
            }
            if (!country.value) {
                country.style.backgroundColor = "red";
                return;
            }
            if (!pincode.value || isNaN(pincode.value) || pincode.value.length !== 6) {
                pincode.style.backgroundColor = "red";
                return;
            }


            dispatch({
                type: "NEXT",
                payload: {
                    address1: addressData.address1,
                    address2: addressData.address2,
                    city: addressData.city,
                    state: addressData.state,
                    country: addressData.country,
                    pinCode: addressData.pinCode,

                }
            })
            Navigate('/payment')
        }

        if (e.target.value === "prev") {
            Navigate('/personal')
        }

    }

    useEffect(() => {
        setAddressData({ ...addressData, ...details })
    }, [])

    return (
        <>
            <div className="formContents">
                <h2 className="heading">Address Details</h2>
                <div className="formInputs">
                    <div className="formInput">
                        <label htmlFor="address1">Address Line 1</label>
                        <input type="text" name="address1" value={addressData.address1} onChange={handleChange} id="address1" required placeholder="Your Address Line 1..." />
                    </div>
                    <div className="formInput">
                        <label htmlFor="address2">Address Line 2</label>
                        <input type="text" name="address2" value={addressData.address2} onChange={handleChange} id="address2" required placeholder="Your Address Line 2..." />
                    </div>
                    <div className="formInput">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" value={addressData.city} onChange={handleChange} id="city" required placeholder="Your City..." />
                    </div>
                    <div className="formInput">
                        <label htmlFor="state">State</label>
                        <input type="email" name="state" value={addressData.state} onChange={handleChange} id="state" required placeholder="Your State..." />
                    </div>
                    <div className="formInput">
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" value={addressData.country} onChange={handleChange} id="country" required placeholder="Your Country..." />
                    </div>
                    <div className="formInput">
                        <label htmlFor="pinCode">Pin Code</label>
                        <input type="text" name="pinCode" value={addressData.pinCode} onChange={handleChange} id="pinCode" minLength="6" required placeholder="Your Pin Code..." />
                    </div>

                </div>
            </div>

            <div className="actions">
                <button value="prev" onClick={handleClick} className="prev"><i className="fa-solid fa-backward"></i> Previous</button>
                <button value="next" onClick={handleClick} className="next">Next <i className="fa-solid fa-forward"></i></button>
            </div>

        </>
    )
}

export default AddressDetails