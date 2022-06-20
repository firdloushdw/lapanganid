import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { HOST } from "./config";

export let Schedule = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [schedule,setSchedule] = useState({
        "data": []
      });

    const input1 = useRef();
    const input2 = useRef();

    async function getSchedule(start,end){

        console.log(start,end);

        const rawData = await fetch(HOST+`/api/v1/fields/${id}/schedules?start_date=${start}&end_date=${end}`,{
            method: 'GET'
        });

        if(rawData.status === 200) setSchedule(await rawData.json());

    }

    return (
        <>
            <Navbar></Navbar>
            <section className="wrapper grid-cols-2 ">
                <div className="grid grid-cols-2 bg-white ">
                    <div className="flex px-2 py-2">
                        <div className="flex flex-wrap bg-white overflow-hidden w-full">
                            <div className="w-auto mx-3 my-3 ">
                                <div className="bg-[#91D36E] px-2 py-2 text-white border-b text-center">Maret 2022</div>
                                <div className="">
                                   <input ref={input1} type="date" />
                                   <b style={{padding: "10px"}}>to</b>
                                   <input ref={input2} type="date" />
                                </div>
                                <button onClick={()=> getSchedule(input1.current.value,input2.current.value)} style={{cursor: "pointer"}} className="mt-[20px] bg-[#91D36E] px-2 py-2 text-white border-b text-center">Submit</button>
                            </div>
    
                        </div>
                    </div>
                    <div className="ml-[97px]">
                        <ul className="inline-block" style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "20px"
                        }}>
                            {
                                schedule.data.length > 0? schedule.data.map(data => (
                                    <li className="bg-[rgb(230,250,230)] p-[20px] mt-[10px]">
                                        <li className="font-josefin text-[#555555] text-[16px] mb-3">
                                            {data.booking_date}
                                        </li>
                                        <li className="font-josefin text-[black] text-[16px] mb-3">
                                            {data.booking_start} : {data.booking_end}
                                        </li>
                                        <li className="font-josefin text-[#555555] text-[16px] mb-3">
                                            price
                                        </li>
                                        <li className="font-josefin text-[black] text-[16px] mb-3">
                                            {data.price}
                                        </li>
                                        <button onClick={()=> navigate("/order/"+data.id)} disabled={data.available === "no"} className="bg-[white] p-[10px] rounded">Booking</button>
                                    </li>
                                )) : 
                                <b>Silahkan input hari</b>
                            }
                        </ul>
                    </div>
                </div>
    
            </section>
            
        </>
    )

}
