import { useEffect } from "react";
import { useState } from "react";
import { HOST } from "../config";
import { Card } from "./Card";

export let Main = () =>{

    const [data,setData] = useState({});

    useEffect(_=>{
        async function getData(){
            const _data = await fetch(HOST+"/api/v1/venues",{method: "GET"});
            setData(await _data.json());
        }
        getData();
    },[])

    return (
        <>
            <div className="grid grid-cols-2">
                <div className="title ml-11">
                    <h1 className="text-5xl font-Josefin inline-block ml-9 mb-8 font-bold">
                        Pilih <span className="text-primer">Lapangan</span>
                    </h1>
                </div>
                <div className="inline-block ml-64 ">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="border-2 w-36 border-primer text-primer bg-white  focus:ring-4  font-medium rounded-lg text-base py-1.5 text-center inline-flex" type="button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.875 8.75C10.2892 8.75 10.625 9.08579 10.625 9.5V15.5C10.625 15.9142 10.2892 16.25 9.875 16.25C9.46079 16.25 9.125 15.9142 9.125 15.5V9.5C9.125 9.08579 9.46079 8.75 9.875 8.75Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.875 3.75C10.2892 3.75 10.625 4.08579 10.625 4.5V7.5C10.625 7.91421 10.2892 8.25 9.875 8.25C9.46079 8.25 9.125 7.91421 9.125 7.5V4.5C9.125 4.08579 9.46079 3.75 9.875 3.75Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.375 13.75C14.7892 13.75 15.125 14.0858 15.125 14.5V15.5C15.125 15.9142 14.7892 16.25 14.375 16.25C13.9608 16.25 13.625 15.9142 13.625 15.5V14.5C13.625 14.0858 13.9608 13.75 14.375 13.75Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.375 3.75C14.7892 3.75 15.125 4.08579 15.125 4.5V12.5C15.125 12.9142 14.7892 13.25 14.375 13.25C13.9608 13.25 13.625 12.9142 13.625 12.5V4.5C13.625 4.08579 13.9608 3.75 14.375 3.75Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.125 12.5C12.125 12.0858 12.4608 11.75 12.875 11.75H15.875C16.2892 11.75 16.625 12.0858 16.625 12.5C16.625 12.9142 16.2892 13.25 15.875 13.25H12.875C12.4608 13.25 12.125 12.9142 12.125 12.5Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.375 11.75C5.78921 11.75 6.125 12.0858 6.125 12.5V15.5C6.125 15.9142 5.78921 16.25 5.375 16.25C4.96079 16.25 4.625 15.9142 4.625 15.5V12.5C4.625 12.0858 4.96079 11.75 5.375 11.75Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.375 3.75C5.78921 3.75 6.125 4.08579 6.125 4.5V10.5C6.125 10.9142 5.78921 11.25 5.375 11.25C4.96079 11.25 4.625 10.9142 4.625 10.5V4.5C4.625 4.08579 4.96079 3.75 5.375 3.75Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.125 10.5C3.125 10.0858 3.46079 9.75 3.875 9.75H6.875C7.28921 9.75 7.625 10.0858 7.625 10.5C7.625 10.9142 7.28921 11.25 6.875 11.25H3.875C3.46079 11.25 3.125 10.9142 3.125 10.5Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.625 7.5C7.625 7.08579 7.96079 6.75 8.375 6.75H11.375C11.7892 6.75 12.125 7.08579 12.125 7.5C12.125 7.91421 11.7892 8.25 11.375 8.25H8.375C7.96079 8.25 7.625 7.91421 7.625 7.5Z" fill="#89CE64" />
                        </svg>
                        Filter </button>
                    <button id="dropdownButton urutkan" data-dropdown-toggle="dropdown" className="border-2 w-36 border-primer text-primer bg-white  focus:ring-4  font-medium rounded-lg text-base py-1.5 text-center inline-flex items-center" type="button">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4046 11.7497C10.7533 11.401 11.3186 11.401 11.6673 11.7497L14.0121 14.0945L16.357 11.7497C16.7056 11.401 17.271 11.401 17.6197 11.7497C17.9683 12.0984 17.9683 12.6637 17.6197 13.0124L14.6435 15.9886C14.2948 16.3372 13.7295 16.3372 13.3808 15.9886L10.4046 13.0124C10.0559 12.6637 10.0559 12.0984 10.4046 11.7497Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.012 7.32141C14.5051 7.32141 14.9049 7.72116 14.9049 8.21427V15.3571C14.9049 15.8502 14.5051 16.25 14.012 16.25C13.5189 16.25 13.1191 15.8502 13.1191 15.3571V8.21427C13.1191 7.72116 13.5189 7.32141 14.012 7.32141Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9.40482C3 8.91171 3.39975 8.51196 3.89286 8.51196H9.25C9.74311 8.51196 10.1429 8.91171 10.1429 9.40482C10.1429 9.89793 9.74311 10.2977 9.25 10.2977H3.89286C3.39975 10.2977 3 9.89793 3 9.40482Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.64286C3 4.14975 3.39975 3.75 3.89286 3.75H14.0119C14.505 3.75 14.9048 4.14975 14.9048 4.64286C14.9048 5.13597 14.505 5.53571 14.0119 5.53571H3.89286C3.39975 5.53571 3 5.13597 3 4.64286Z" fill="#89CE64" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 14.1667C3 13.6735 3.39975 13.2738 3.89286 13.2738H8.05952C8.55264 13.2738 8.95238 13.6735 8.95238 14.1667C8.95238 14.6598 8.55264 15.0595 8.05952 15.0595H3.89286C3.39975 15.0595 3 14.6598 3 14.1667Z" fill="#89CE64" />
                        </svg>
                        urutkan </button>
                    <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                        <ul className="py-1" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Bintang {">"} 4</a>
                            </li>
    
                        </ul>
    
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <div className="mx-60 grid grid-cols-2  gap-x-8">
                    {
                        data.data?.map((e,i) => <Card
                        key={i}
                        id={i+1}
                        name={e.name} 
                        description={e.description}
                        address={e.address}
                        url={`/lapangan/list/${e.id}`}
                        image_url={e.image_url}></Card>)
                    }
                </div>
            </div>
            <div className="mb-20"></div>
        </>
    )
} 
  