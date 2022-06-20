import { Navbar } from "../component/Navbar"

export const EditPassword = () => {


    return (
        <>
            <section className="flex items-center justify-center mt-[155px] flex-col mb-[135px]">
                <div className="font-bold">
                    <h1 className="text-5xl text-[#555555]">
                        Ganti
                        <span className="text-[#91D36E]">Kata Sandi</span>
                    </h1>
                </div>
                <div className="mt-[37px]">
                    <div className="w-[152px] h-[29px] rounded-[10px] text-[#91D36E]">Sandi Lama</div>
                    <div className="">
                        <input type="text" name="" id="" className="w-[329px] h-[29px] border-2 border-[#91D36E] rounded-[10px]"/>
                    </div>
                    <div className="w-[152px] h-[29px] rounded-[10px] text-[#91D36E]">Sandi Baru</div>
                    <div className="">
                        <input type="text" name="" id="" className="w-[329px] h-[29px] border-2 border-[#91D36E] rounded-[10px]"/>
                    </div>
                </div>
                <div className="flex gap-[14px] mt-7">
                    <button className="w-[133px] h-[32px] rounded-[10px] border-2 border-[#91D36E] text-[#91D36E] text-base text-center pt-1 pb-1" href="">Ganti</button>
                    <button className="w-[133px] h-[32px] rounded-[10px] border-2  text-white bg-[#91D36E] text-base text-center pt-1 pb-1" href="">batal</button>
                </div>
            </section>
        </>
    )
}