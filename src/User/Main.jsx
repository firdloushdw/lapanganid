import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOST } from "../config";

export const MainProfile = () => {

    const [user, setUser] = useState({
        profile: '',
        name: '',
        komunitas: '',
        email: '',
        phone: '',
        username: ''
    });

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
        getProfile();
    });

    const navigate = useNavigate();

    return (
        <>
            {
                user.name.length === 0 ? <section className="flex gap-[119px] items-start justify-center mt-[136px] wrapper">Loading Data...., Refresh page if page not show</section>
                    : (
                        <>
                            <section className="flex gap-[119px] items-start justify-center mt-[136px] wrapper">
                                <div className="flex flex-col items-center">
                                    <div className="w-[206px] h-[206px] bg-[#717171] rounded-full mb-[46px]">
                                        <img src="./public/img/ellipse.svg" alt="" className="w-full h-full" />
                                    </div>
                                    <a href="#" className="text-base text-[#FFFFFF] w-[224px] h-[32px] rounded-[10px] px-10 py-2 bg-[#91D36E] text-center">
                                        Ganti Foto
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-col gap-[7px]">
                                        <div className="w-[152px] h-[29px] rounded-[10px]">Username</div>
                                        <input value={user.username} readOnly className="w-[329px] h-[29px] bg-[#C4C4C4] rounded-[10px] p-[15px]" type="text" />
                                        <div className="w-[152px] h-[29px] rounded-[10px]">Komunitas</div>
                                        <input value={user.komunitas} readOnly className="w-[329px] h-[29px] bg-[#C4C4C4] rounded-[10px] p-[15px]" type="text" />
                                        <div className="w-[152px] h-[29px] rounded-[10px]">Nomor Telepon</div>
                                        <input value={user.phone} readOnly className="w-[329px] h-[29px] bg-[#C4C4C4] rounded-[10px] p-[15px]" type="text" />
                                        <div className="w-[152px] h-[29px] rounded-[10px]">E-mail</div>
                                        <input value={user.email} readOnly className="w-[329px] h-[29px] bg-[#C4C4C4] rounded-[10px] p-[15px]" type="text" />
                                    </div>
                                    <div className="flex gap-[14px] ml-auto">
                                        <button onClick={() => navigate("/user/edit")} className="w-[113px] h-[29px] rounded-[10px] bg-[#C4C4C4] mt-[49px]">Edit</button>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
            }

        </>
    )

}