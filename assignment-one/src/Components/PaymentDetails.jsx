import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";


const PaymentDetails = () => {


    const dispatch = useDispatch()
    const details = useSelector((state) => state.details)
    const Navigate = useNavigate()


    const [paymentData, setPaymentData] = useState({
        cardNo: "",
        CVV: "",
        MM: "",
        YYYY: "",
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(value){
            e.target.style.backgroundColor="white"
        }
        setPaymentData({ ...paymentData, [name]: value })
    }

    const handleClick = (e) => {
        e.preventDefault();

        const cardNo = document.getElementById("cardNo")
        const CVV = document.getElementById("CVV")
        const MM = document.getElementById("MM")
        const YYYY = document.getElementById("YYYY")


        
       

        if (e.target.value === "next") {
            if (!cardNo.value || isNaN(cardNo.value)) {
                cardNo.style.backgroundColor = "red";
                return;
            }
            
            if (!CVV.value || isNaN(CVV.value) || CVV.value.length !== 3) {
                CVV.style.backgroundColor = "red";
                return;
            }
            if (!MM.value || isNaN(MM.value) || MM.value.length !== 2) {
                MM.style.backgroundColor = "red";
                return;
            }
            if (!YYYY.value || isNaN(YYYY.value) || YYYY.value.length !== 4) {
                YYYY.style.backgroundColor = "red";
                return;
            }
            
            dispatch({
                type: "NEXT",
                payload: {
                    cardNo: paymentData.cardNo,
                    CVV: paymentData.CVV,
                    MM: paymentData.MM,
                    YYYY: paymentData.YYYY,
                }
            })
            Navigate('/FinalPage')
        }


        if (e.target.value === "prev") {
            Navigate('/address')
        }

    }

    useEffect(() => {
        setPaymentData({ ...paymentData, ...details })
    }, [])

    return (
        <>
            <div className="formContents">
                <h2 className="heading">Payment Details</h2>
                <div className="formInputs">
                    <div className="formInput">
                        <label htmlFor="cardNo">Card No</label>
                        <input type="text" name="cardNo" id="cardNo" value={paymentData.cardNo} onChange={handleChange} required placeholder="Your Card No..." />
                    </div>
                    <div className="formInput">
                        <label htmlFor="CVV">CVV</label>
                        <input type="text" name="CVV" id="CVV" value={paymentData.CVV} onChange={handleChange} required placeholder="Your CVV..." />
                    </div>
                    <div className="formInput">
                        <label htmlFor="mm">Month of Expiry (MM)</label>
                        <input type="text" name="MM" id="MM" value={paymentData.MM} onChange={handleChange} required placeholder="MM" />
                    </div>
                    <div className="formInput">
                        <label htmlFor="year">Year of Expiry (YYYY)</label>
                        <input type="text" name="YYYY" id="YYYY" value={paymentData.YYYY} onChange={handleChange} required placeholder="YYYY" />
                    </div>
                </div>
            </div>

            <div className="actions">
                <button onClick={handleClick} value="prev" className="prev"><i className="fa-solid fa-backward"></i> Previous</button>
                <button onClick={handleClick} value="next" className="next">Next <i className="fa-solid fa-forward"></i></button>
            </div>
        </>
    )
}

export default PaymentDetails