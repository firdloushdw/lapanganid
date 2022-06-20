import { Navbar } from "./component/Navbar";

export let Home = () => (
    <div className="">
        <Navbar></Navbar>
        <section className="flex items-center justify-between wrapper ">
            <div>
                <h1 className="text-4xl text-[#91D36E] mb-[23px] font-bold">
                    Lapangan.id
                </h1>
                <p className="w-[529px] mb-6 text-[#555555]">
                Lapangan.id merupakan platform untuk penggemar olahraga menemukan
                komunitas olahraga dan menyewa lapangan dengan cabang olahraga
                meliputi futsal, voli, basket, sepak bola, bulu tangkis, dan tenis
                meja.
                </p>
                <a href="#" className="text-base text-[#FFFFFF] px-10 py-3 bg-[#91D36E] text-center rounded-full">
                    Jelajahi
                </a>
            </div>

            <div className="relative w-[553px] h-[545px]">
                <img src="./public/img/person.svg" className="w-full h-full object-contain z-10 relative" alt="" />
                <img src="./public/img/rect.svg" alt="" className="absolute top-2 right-6 -z-10" />
            </div>
        </section>
        <div className="w-screen relative h-[326px]">
            <img src="./public/img/rumput.svg" alt="" className="w-full absolute z-0 -top-[156px]" />
        </div>

        <section className="wrapper">
            <div className="flex items-center justify-center flex-col gap-[14px]">
                <div className="font-bold">
                    <h1 className="text-5xl text-[#555555]">
                        Rekomendasi
                        <span className="text-[#91D36E]">Lapangan</span>
                    </h1>
                </div>
                <p>lapangan dengan peminat tertinggi di Lapangan.id</p>
            </div>

            <div className="flex gap-10 mt-[82px]">
                <div className="shadow-lg shadow-black/25">
                    <div className="relative">
                        <img src="/public/img/recom1.png" alt="" className="w-full h-full" />
                        <div className="absolute bottom-0 w-full">
                            <div className="flex gap-[2px] mb-[7px] ml-[8px]">
                                <img src="/public/img/star.svg" alt="" />
                                <img src="/public/img/star.svg" alt="" />
                                <img src="/public/img/star.svg" alt="" />
                                <img src="/public/img/star.svg" alt="" />
                                <img src="/public/img/star.svg" alt="" />
                            </div>

                            <div className="bg-white flex justify-between items-center w-full">
                                <div className="pl-[20px] pt-[9px] pb-[16px]">
                                    <h4 className="text-[#555555] text-[18px] font-bold">
                                        Lapangan Garuda
                                    </h4>
                                    <div className="flex items-center gap-[16px]">
                                        <div className="w-[28px] h-[15px] bg-[#91D36E]"></div>
                                        <p>Kecamatan Plumbon</p>
                                    </div>
                                </div>
                                <div className="w-[82px] h-[77px] bg-[#91D36E] flex items-center justify-center">
                                    <a href="#">
                                        <img src="/public/img/arrow.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shadow-lg shadow-black/25">
                    <div className="relative">
                        <img src="/public/img/recom2.png" alt="" className="w-full h-full" />
                        <div className="absolute bottom-0 w-full">
                            <div className="flex gap-[2px] mb-[7px] ml-[8px]">
                                <img src="/public/img/star.svg" alt="" />
                                <img src="/public/img/star.svg" alt="" />
                                <img src="/public/img/star.svg" alt="" />
                                <img src="/public/img/star.svg" alt="" />
                            </div>

                            <div className="bg-white flex justify-between items-center w-full h-[77px]">
                                <div className="pl-[11px] pt-[9px] pb-[16px]">
                                    <h4 className="text-[#555555] text-[18px] font-bold">
                                        Lapangan KIA
                                    </h4>
                                    <div className="flex items-center gap-[9px]">
                                        <div className="w-[15px] h-[15px] bg-[#91D36E]"></div>
                                        <p className="text-baseo text-[#555555]">Kecamatan Plered</p>
                                    </div>
                                </div>
                                <div className="w-[82px] h-[77px] bg-[#91D36E] flex items-center justify-center">
                                    <a href="#">
                                        <img src="/public/img/arrow.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shadow-lg shadow-black/25">
                    <div className="relative">
                        <img src="/public/img/recom3.png" alt="" className="w-full h-full" />
                        <div className="absolute bottom-0 w-full">
                            <div className="flex gap-[2px] mb-[7px] ml-[8px]">
                                <img src="/public/img/star.svg" alt="" />
                                <img src="/public/img/star.svg" alt="" />
                                <img src="/public/img/star.svg" alt="" />
                                <img src="/public/img/star.svg" alt="" />
                            </div>

                            <div className="bg-white flex justify-between items-center w-full h-[77px]">
                                <div className="pl-[11px] pt-[9px] pb-[16px]">
                                    <h4 className="text-[#555555] text-[18px] font-bold">
                                        GOR Ranggajati
                                    </h4>
                                    <div className="flex items-center gap-[9px]">
                                        <div className="w-[15px] h-[15px] bg-[#91D36E]"></div>
                                        <p className="text-base text-[#555555]">Kecamatan Sumber</p>
                                    </div>
                                </div>
                                <div className="w-[82px] h-[77px] bg-[#91D36E] flex items-center justify-center">
                                    <a href="#">
                                        <img src="/public/img/arrow.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-[26px] items-center justify-center mt-[86px]">
                <div className="w-10 h-10  rounded-full items-center flex justify-center rotate-180 border border-[#91D36E]">
                    <a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg ">
                            <path d="M5 12H19" stroke="#91D36E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="#91D36E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>

                </div>
                <div className="w-10 h-10  rounded-full items-center flex justify-center border border-[#91D36E]">
                    <a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg ">
                            <path d="M5 12H19" stroke="#91D36E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="#91D36E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

        </section>

        <section className="mt-[204px] wrapper mb-[233px]">
            <div className="flex items-center justify-center gap-[36px]">
                <img src="./public/img/lgb.svg" alt="" />
                <div>
                    <div className="font-bold">
                        <h1 className="text-5xl text-[#555555]">
                            Kenapa Harus
                            <span className="text-[#91D36E]">Lapangan.id?</span>
                        </h1>
                    </div>
                    <div className="mt-[32px] text-[#555555] ml-[109px]">
                        <div className="flex gap-[23px] items-center mb-4">
                            <img src="./public/img/circle.svg" alt="" />
                            <h5 className="text-3xl">Booking Lapangan dengan Praktis</h5>
                        </div>
                        <div className="ml-[12px] mb-2">
                            <p>
                            Melalui website lapangan id, Anda dapat melakukan booking
                  lapangan dengan mudah tanpa harus keluar rumah.
                            </p>
                        </div>
                        <div className="flex gap-[23px] items-center mb-4">
                            <img src="./public/img/circle.svg" alt="" />
                            <h5 className="text-3xl">Pembayaran yang Mudah</h5>
                        </div>
                        <div className="ml-[12px] mb-2">
                            <p>
                            Anda dapat melakukan pembayaran booking lapangan dengan mudah
                  menggunakan e-wallet seperti Dana, Ovo, Linkaja, dan Gopay.
                            </p>
                        </div>
                        <div className="flex gap-[23px] items-center mb-4">
                            <img src="./public/img/circle.svg" alt="" />
                            <h5 className="text-3xl">Berbagai Macam Lapangan</h5>
                        </div>
                        <div className="ml-[12px] mb-2">
                            <p>
                            Menyewakan lapangan futsal, voli, basket, sepakbola, bulu
                  tangkis, dan tenis meja.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="wrapper mb-[206px]">
            <div className="flex items-center justify-center flex-col gap-[14px] mb-[70px]">
                <div className="font-bold">
                    <h1 className="text-5xl text-[#555555]">
                        Informasi
                        <span className="text-[#91D36E]">Penyewaan</span>
                    </h1>
                </div>
                <p>Sewa lapangan jauh lebih mudah dengan Lapangan.id</p>
            </div>
            <div className="flex gap-x-[37px] flex-wrap gap-y-[22px]">
                <div className="w-[347px] h-[80px] hover:bg-[#91D36E] text-[#555555] hover:text-white transition-colors border border-[#91D36E] flex items-center justify-center rounded-[5px]">
                    <a href="#" className="font-bold text-[30px]">Futsal</a
                    >
                </div>
            </div>
            <div
                className="w-[347px] h-[80px] hover:bg-[#91D36E] text-[#555555] hover:text-white transition-colors border border-[#91D36E] flex items-center justify-center rounded-[5px]"
            >
                <a
                    href="#"
                    className="font-bold text-[30px]"
                >Bulutangkis
                </a>
            </div>
            <div
                className="w-[347px] h-[80px] hover:bg-[#91D36E] text-[#555555] hover:text-white transition-colors border border-[#91D36E] flex items-center justify-center rounded-[5px]"
            >
                <a
                    href="#"
                    className="font-bold text-[30px]"
                >Tenis
                </a>
            </div>
            <div
                className="w-[347px] h-[80px] hover:bg-[#91D36E] text-[#555555] hover:text-white transition-colors border border-[#91D36E] flex items-center justify-center rounded-[5px]"
            >
                <a
                    href="#"
                    className="font-bold text-[30px]"
                >Basket
                </a>
            </div>
            <div
                className="w-[347px] h-[80px] hover:bg-[#91D36E] text-[#555555] hover:text-white transition-colors border border-[#91D36E] flex items-center justify-center rounded-[5px]"
            >
                <a
                    href="#"
                    className="font-bold text-[30px]"
                >Sepakbola
                </a>
            </div>
            <div
                className="w-[347px] h-[80px] hover:bg-[#91D36E] text-[#555555] hover:text-white transition-colors border border-[#91D36E] flex items-center justify-center rounded-[5px]"
            >
                <a href="#"
                    className="font-bold text-[30px]">Voli
                </a>
            </div>
        </section>
    </div >
);