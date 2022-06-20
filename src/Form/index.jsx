import { useRef } from "react";
import { useState } from "react";
import { HOST } from "../config";
import "./style.css";

export function Form(props){

    if(!props.hasOwnProperty("input")) props.input = [];
    const [joinWith,setJoinWith] = useState("login");
    const [input,setInput] = useState(props.input);
    const form = useRef(null);
    
    return (
        <div className="form" ref={form}>
            <button className="close-btn" onClick={_=> props.close()}>&times;</button>
            <h1>Lapangan.id</h1>
            {
                input.map((e,i) =>{
                    return (
                        <div key={i+e.label} className="input">
                            <label>{e.label}</label>
                            <input name={e.label} type={e.type} />
                        </div>
                    )
                })
            }
            <div className="action">
                {
                    props.login && joinWith === "login" && (
                        <>
                            <button className="solid-btn" onClick={async ()=>{
                                let bodyData = {};
                                const allInput = [...form.current.querySelectorAll("input")].filter(e => e.type !== "checkbox").map(e => ({[e.name]: e.value})).forEach(e =>{bodyData = {...bodyData,...e}});
                        
                                if(!props.custom) 
                                {
                                    const rawData = await fetch(HOST+'/auth/login',{
                                        method:"POST",
                                        headers:{
                                            "Content-Type": "application/json",
                                            "Accept": "application/json"
                                        },
                                        body: JSON.stringify(bodyData)
                                    });
                                    
                                    props.onLogin({
                                        type: "login",
                                        result: await rawData.json()
                                    })
                                }

                            }}>Login</button>
                            <button className="outline-btn" onClick={()=> {
                                if(!props.custom){
                                    setInput(e => [...e,{label: "email", type: "email"}]);
                                    setJoinWith(e => "register");
                                }
                                
                            }}>Register</button>
                        </>
                    )
                }
                {
                    props.register || props.login && joinWith === "register" && <button className="outline-btn" onClick={async ()=>{
                        
                        let bodyData = {};

                        if(!props.custom){

                            const allInput = [...form.current.querySelectorAll("input")].filter(e => e.type !== "checkbox").map(e => ({[e.name]: e.value})).forEach(e =>{bodyData = {...bodyData,...e}});
                            const isPartner = form.current.querySelector("[type='checkbox']");
                            let type ="users";

                            isPartner.onchange = (e)=>{
                                
                                if(e.target.checked) type = "partners"
                                else type = "users"

                            }


                            const rawData = await fetch(HOST+'/api/v1/'+type,{
                                method:"POST",
                                headers:{
                                    "Content-Type": "application/json",
                                    "Accept": "application/json"
                                },
                                body: JSON.stringify(bodyData)
                            });

                            const data = await rawData.json();
                            
                            props.onRegister({
                                type: "register",
                                login: ()=>{
                                    setJoinWith(e => "login");
                                    setInput(e => [...e.slice(0,e.length-1)])
                                }
                            });

                        }
                        
                }}>Register</button> 
                }


            </div>
        </div>
    )

}

// exampel for using
// <Form input={[
//     {
//         label: "name",
//         type: "text"
//     },
//     {
//         label: "password",
//         type: "password"
//     }
// ]} 
// login={true} 
// register={false}
// onLogin={(data)=>{

// }}
// onRegister={(data)=>{
    
// }}
// ></Form>