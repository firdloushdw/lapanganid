import { Outlet } from "react-router-dom";
import { Navbar } from "../component/Navbar";

export const Profile = ()=> (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </>
)