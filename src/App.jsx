import { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Check } from "./Booking/check";
import { Footer } from "./component/Footer";
import { HOST } from "./config";
import { Form } from "./Form";
import { History } from "./History";
import { Home } from "./Home";
import { Komunitas } from "./Komunitas/Home";
import { Detail } from "./Lapangan/Detail";
import { Lapangan } from "./Lapangan/Home";
import { ListVenue } from "./Lapangan/ListVenue";
import { Main as MainLapangan } from "./Lapangan/Main";
import { Riawayat } from "./Riwayat";
import { Schedule } from "./Schedule";
import { EditPassword } from "./User/EditPassword";
import { EditProfile } from "./User/EditProfile";
import { MainProfile } from "./User/Main";
import { Profile } from "./User/Profile";

function App() {

    const [state, setState] = useState(false);

    useMemo(() => {

        async function checkState() {

            const rawData = await fetch(HOST + "/api/v1/user", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("lapangan_id_user_token"))?.access_token
                }
            }).catch(e => console.log("there no account please login or register"));

            // const data = await rawData.json();
            // console.log(rawData.status);
            if (rawData.status === 401) {

                const newToken = await fetch(HOST+"/auth/refresh",{
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": "Bearer "+ JSON.parse(
                            localStorage.getItem("lapangan_id_user_token")
                        ).refresh_token
                    }
                });

                if(newToken.status === 200){
                    localStorage.setItem(JSON.stringify({
                        ...JSON.parse(
                            localStorage.getItem("lapangan_id_user_token")
                        ),
                        access_token: (await newToken.json()).access_token
                     }
                    ));
                    setState(true);
                }

                if(newToken.status === 401){
                    setState(false);
                }
                
            }

            if (rawData.status === 404 || rawData.status === 200 || rawData.status === 422) {
                setState(true);
            }

        }

        checkState();

    });

    return (
        <>
            {
                state? (
                    <>
                        <BrowserRouter>
                            <Routes>
                                <Route index element={<Home></Home>}></Route>
                                <Route path="/schedule/:id" element={<Schedule></Schedule>}></Route>
                                <Route path="/lapangan" element={<Lapangan></Lapangan>}>
                                    <Route index element={<MainLapangan></MainLapangan>}></Route>
                                    <Route path="list/:id" element={<ListVenue></ListVenue>}></Route>
                                    <Route path="detail/:id" element={<Detail></Detail>}></Route>
                                </Route>
                                <Route path="/user" element={<Profile></Profile>}>
                                    <Route index element={<MainProfile></MainProfile>}></Route>
                                    <Route path="edit" element={<EditProfile></EditProfile>}></Route>
                                    <Route path="password" element={<EditPassword></EditPassword>}></Route>
                                </Route>
                                <Route path="/order/:id" element={<Check></Check>}></Route>
                                <Route path="/komunitas" element={<Komunitas></Komunitas>}></Route>
                                <Route path="/riwayat" element={<History></History>}></Route>
                                
                            </Routes>
                        </BrowserRouter>
                        <Footer></Footer>
                    </>
                ) : <Form input={[
                    {
                        label: "username",
                        type: "text"
                    },
                    {
                        label: "password",
                        type: "password"
                    }
                ]}
                    login={true}
                    register={false}
                    custom={true}
                    close={()=> setShowForm(e => !e)}
                    onLogin={(data) => {
                    }}
                    onRegister={(data) => {
                    }}
                ></Form>

            }
        </>
    )

}


export default App;