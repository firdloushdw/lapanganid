import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from "../component/Navbar";
import { HOST } from "../config";
import { Card } from "./Card";
import {Outlet} from "react-router-dom";
import { Footer } from "../component/Footer";

export let Lapangan = () =>{

    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
} 
    