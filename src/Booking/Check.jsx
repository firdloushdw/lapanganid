import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../component/Navbar";
import { HOST } from "../config";

export const Check = () => {

    const { id } = useParams();
    const [order,setOrder] = useState({
        info: {},
        url: {}
    });

    useEffect(()=>{

        async function createOrder(){

            const rawData = await fetch(HOST+`/api/v1/schedules/${id}/orders`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+JSON.parse(
                        localStorage.getItem("lapangan_id_user_token")
                    ).access_token
                }
            });

            if(rawData.status === 200){
                const resultData = await rawData.json();
                setOrder({
                    info: (await (await fetch(HOST+`/api/v1/orders/${resultData.data.id}`,{
                        method: "GET",
                        headers: {
                            "Authorization": "Bearer "+JSON.parse(
                                localStorage.getItem("lapangan_id_user_token")
                            ).access_token
                        }
                    })).json()).data,
                    url: await (await fetch(HOST+`/api/v1/orders/${resultData.data.id}/payment`,{
                        method: "GET",
                        headers: {
                            "Authorization": "Bearer "+JSON.parse(
                                localStorage.getItem("lapangan_id_user_token")
                            ).access_token
                        }
                    })).json()
                })

                console.log(order)
            }

            

        }

        createOrder();
        
    });

    return (
        <>

            <Navbar></Navbar>
            <section className="w-[100%] h-[500px] flex justify-content-center gap-[20px] align-items-center flex-col">

                <div className="w-[600px] bg-[rgb(230,230,250)] p-[20px] rounded flex justify-content-center gap-[20px] align-items-center flex-col">
                    <h1 style={{fontWeight: "bold",fontSize: "20px"}}>Order Info</h1>
                    <p>Order Price: {order.info.price_subtotal}</p>
                    <p>Order Date: {order.info?.booking_schedule?.booking_date}</p>
                    <a className="p-[20px] bg-[white] text-black" href={order.url.redirect_url} onClick={function(e){
                        open(e.target.href);
                        e.preventDefault();
                    }}>go to verify</a>
                </div>

            </section>


        </>
    )

}