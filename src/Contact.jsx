import React, { useState } from "react";

const Contact=()=>{
    
    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    }); 

    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname} ,email is ${data.email} ,phone no. is ${data.phone} and message is ${data.msg}!`)
    };
    
    const inputEvent =(event)=>{
        const {name,value} = event.target;

        setData((prevValue)=>{
            return({
            ...prevValue,
            [name]:value});
        })
    };

    return(
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-10 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div 
                            class="mb-3">
                        <label 
                            for="exampleFormControlInput1" 
                            class="form-label"> FullName </label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="fullname"
                            value={data.fullname}
                            onChange={inputEvent}
                            placeholder="Enter your name here"/>
                        </div>
                        <div 
                            class="mb-3">
                        <label 
                            for="exampleFormControlInput1" 
                            class="form-label">Phone</label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="phone"
                            value={data.phone}
                            onChange={inputEvent}
                            placeholder="mobile number"/>
                        </div>
                        <div 
                            class="mb-3">
                        <label 
                            for="exampleFormControlInput1" 
                            class="form-label">Email address</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="email"
                            value={data.email}
                            onChange={inputEvent}
                            placeholder="name@example.com"/>
                        </div>
                        
                        <div 
                            class="mb-3">
                            <label 
                                for="exampleFormControlTextarea1" 
                                class="form-label">Message</label>
                            <textarea 
                                class="form-control" 
                                id="exampleFormControlTextarea1" 
                                name="msg"
                                value={data.msg}
                                onChange={inputEvent}
                                rows="3"></textarea>
                        </div>

                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;