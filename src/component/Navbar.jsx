import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../Form";

export let Navbar = () => {

    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    function loginOrRegister(e) {

        setShowForm(e => !e);
        e.preventDefault();

    }

    return (
        <>
            <nav className="flex items-center justify-between text-[#555555] py-[60px] wrapper">
                <div className="flex items-center">
                    <img className="mr-[57px]" src="./public/img/ellipse.svg" alt="" />
                    <div className="flex gap-[30px]">
                        <Link to="/">Home</Link>
                        <Link to="/lapangan">Lapangan</Link>
                        <Link to="/komunitas">Komunitas</Link>
                        <Link to="/riwayat">Riwayat</Link>
                        {
                            localStorage.getItem("lapangan_id_user_token")? <Link to="/user">Profile</Link> : <a href="" onClick={loginOrRegister}>Login/Register</a>
                        } 
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[35px]">
                    <div className="flex gap-[80px] rounded-full items-center justify-between relative flex-auto min-w-0 w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        <input type="search" placeholder="Cari aja disini..." aria-label="Search" aria-describedby="button-addon2" />
                        <img src="./public/img/search.svg" alt="" />
                    </div>
                    <img src="public/img/Ellipse 21.svg" alt="" />
                </div>
            </nav>
            {
                showForm && <Form input={[
                    {
                        label: "username",
                        type: "text"
                    },
                    {
                        label: "password",
                        type: "password"
                    },
                    {
                        label: "register as partner",
                        type: "checkbox"
                    }
                ]}
                    login={true}
                    register={false}
                    custom={false}
                    close={()=> setShowForm(e => !e)}
                    onLogin={(data) => {
                        localStorage.setItem("lapangan_id_user_token", JSON.stringify(data.result));
                        navigate("/user/edit");
                    }}
                    onRegister={(data) => {
                        data.login();
                    }}
                ></Form>
            }
        </>
    );
}