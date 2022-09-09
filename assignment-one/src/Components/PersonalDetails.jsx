import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";



const PersonalDetails = () => {

    const dispatch = useDispatch()
    const details = useSelector((state) => state.details)
    
    const Navigate = useNavigate()


    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
    })



    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        if(value){
            e.target.style.backgroundColor="white"
        }
        setFormData({...formData, [name]: value})

        
    }

    const handleClick = (e) => {
        e.preventDefault(); 
        const fname = document.getElementById("fname")
        const lname = document.getElementById("lname")
        const email = document.getElementById("email")
        const mobile = document.getElementById("mobile")
        let mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (e.target.value === "next") {
            if(!fname.value){
                fname.style.backgroundColor="red";
                return;
            }
            if(!lname.value){
                lname.style.backgroundColor="red";
                return;
            }
            if(!email.value ||  !mailformat.test(email.value)){
                email.style.backgroundColor="red";
                return;
            }
            if(!mobile.value || isNaN(mobile.value)){
                mobile.style.backgroundColor="red";
                return;
            }


            dispatch({
                type: "NEXT",
                payload: {
                    fname: formData.fname,
                    lname: formData.lname,
                    email: formData.email,
                    mobile: formData.mobile,
                }
            })
            Navigate('/address')
        }
    }

    useEffect(() => {
        setFormData({ ...formData, ...details  })
    },[])


    return (
        <>
            <div className="formContents">
                <h2 className="heading">Personal Details</h2>
                <div className="formInputs">
                    <div className="formInput">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" name="fname" id="fname" value={formData.fname} onChange={handleChange} required placeholder="Your First Name..." />
                    </div>
                    <div className="formInput">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" name="lname" id="lname" value={formData.lname} onChange={handleChange} required placeholder="Your Last Name..." />
                    </div>
                    <div className="formInput">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required placeholder="Your Email id..." />
                    </div>
                    <div className="formInput">
                        <label htmlFor="mobile">Contact No</label>
                        <input type="text" name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} maxLength="10" pattern="[0-9]+" required placeholder="Your Contact No..." />
                    </div>
                </div>
            </div>

            <div className="actions">
                <button value="prev" onClick={handleClick} className="prev" style={{ display: "none" }}><i className="fa-solid fa-backward"></i> Previous</button>
                <button value="next" onClick={handleClick} className="next">Next <i className="fa-solid fa-forward"></i></button>
            </div>
        </>

    )
}

export default PersonalDetails