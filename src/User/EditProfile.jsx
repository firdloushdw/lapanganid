import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { HOST } from '../config';

export const EditProfile = _ => {
    const [user, setUser] = useState({
        profile: '',
        name: '',
        komunitas: '',
        email: '',
        phone: '',
        username: ''
    });

    const [exits, setExits] = useState(0);
    const navigate = useNavigate();

    useMemo(() => {
        const getProfile = async () => {
            const data = await fetch(HOST + "/api/v1/profile", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("lapangan_id_user_token")).access_token}`
                }
            });

            const resultData = await data.json();

            if (data.status === 200) {
                setExits(true);

                setUser(e => ({
                    ...e,
                    ...{
                        profile:{},
                        name: resultData.data.name,
                        komunitas: "",
                        email: resultData.data.user.email,
                        phone: resultData.data.phone,
                        username: resultData.data.user.username
                    }
                }))
            }
        }
        
        try{
            getProfile();
        }catch(err){}
    })

    async function createProfile() {

        const getProfile = await fetch("/api/v1/profile", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("lapangan_id_user_token")).access_token}`
            }
        });

        if (getProfile.status === 404) {

            const rawData = await fetch(HOST + "/api/v1/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("lapangan_id_user_token")).access_token}`
                },
                body: JSON.stringify(user)
            });

            const result = await rawData.json();
            console.log(result);

            if (rawData.status === 200) {
                setExits(false);
                navigate("/user");
            }

        } else {

            setExits(true);

        }

    }

    return (
        <>
            {
                user.name.length === 0 ? <section className="flex gap-[119px] items-start justify-center mt-[136px] wrapper">Loading Data...., Refresh page if page not show</section>
                    : (
                        <>
                            <div >
                                <section className="flex gap-[119px] items-start justify-center mt-[136px] wrapper">
                                    <div className="flex flex-col items-center">
                                        <div className="w-[206px] h-[206px] bg-[#717171] rounded-full mb-[46px]">
                                            <img src="https://sotobakar.blob.core.windows.net/lapangan-id/profile/3.jpg" alt="" className="w-full h-full" />
                                        </div>
                                        <a
                                            href="#"
                                            className="text-base bg-[#FFFFFF] w-[224px] h-[32px] rounded-[10px] px-10 py-auto text-[#91D36E] border-2 border-[#91D36E] text-center"
                                        >
                                            Ganti Foto
                                        </a>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col gap-[7px]">

                                            <div className="text-[#91D36E] w-[152px] h-[29px] rounded-[10px]">Name</div>
                                            <input value={user.name} onChange={(event) => setUser(e => ({
                                                ...e,
                                                name: event.target.value,
                                            }))} className="w-[329px] border-2 border-[#91D36E] px-2 h-[29px] text-bold text-[#C4C4C4] rounded-[10px]" />
                                            <div className="text-[#91D36E] w-[152px] h-[29px] rounded-[10px]">
                                                Nomor Telepon
                                            </div>
                                            <input value={user.phone} onChange={(event) => setUser(e => ({
                                                ...e,
                                                phone: event.target.value,
                                            }))} className="w-[329px] h-[29px] border-2 border-[#91D36E] px-2 text-bold text-[#C4C4C4] rounded-[10px]" />

                                            {
                                                exits && (
                                                    <>
                                                        <div className="text-[#91D36E] w-[152px] h-[29px] rounded-[10px]">Username</div>
                                                        <input id="username"
                                                            name="username" type="text" className="w-[329px] h-[29px] border-2 border-[#91D36E] text-[#91D36E] px-2 rounded-[10px]"
                                                            value={user.username} onChange={(event) => setUser({
                                                                ...user,
                                                                username: event.target.value,
                                                            })}>

                                                        </input>
                                                        <div className="text-[#91D36E] w-[152px] h-[29px] rounded-[10px]">Komunitas</div>
                                                        <input value={user.komunitas} onChange={(event) => setUser(e => ({
                                                            ...e,
                                                            komunitas: event.target.value,
                                                        }))} className=" w-[329px] h-[29px] border-2 border-[#91D36E] px-2 text-bold text-[#C4C4C4] rounded-[10px]" />
                                                        <div className="text-[#91D36E] w-[152px] h-[29px] rounded-[10px]">E-mail</div>
                                                        <input value={user.email} onChange={(event) => setUser(e => ({
                                                            ...e,
                                                            email: event.target.value,
                                                        }))} className="w-[329px] h-[29px] border-2 border-[#91D36E] text-bold px-2 text-[#C4C4C4] rounded-[10px]" />

                                                    </>
                                                )
                                            }
                                        </div>
                                        <div className="flex gap-[14px] ml-auto">
                                            <button type='submit' onClick={() => { createProfile() }} className="w-[133px] h-[32px] rounded-[10px] border-2 bg-[#91D36E] text-bold text-white mt-[49px]">Simpan</button>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </>
                    )
            }
        </>
    );

}
