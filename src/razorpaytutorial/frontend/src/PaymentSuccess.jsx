
import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {
    const print = () =>
    {
        window.print();
    }

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        <div style={{lineHeight:"100px"}}>
            <div className="paymentsuccess" id='divContents'>
                <div className="print" id="iframeprint">
                    <h1>Payment Sucessfull</h1>
                    <p>Reference No. {referenceNum}</p>
                
                    <p>Contact <a href="mailto:manipurtourism2024@gmail.com">manipurtourism2024@gmail.com</a> Or <a href="tel:+91-9233102848">+91-9233102848</a> For Confirmation of your Payment</p>
                </div>
            </div>
       <div  style={{ display:"flex", justifyContent:"center", alignItems:"center"}} >
        <button className='btn' onClick={print} style={{width:"10%"}}>Print ID</button>
       </div>
        </div>
       
    )
}

export default PaymentSuccess