export const Rating = ()=> (
    <section className="wrapper mt-12 mb-24">
        <div className="riwayat overflow-y-scroll h-96 w-[1183px] mx-auto">

            <div className="ml-3 p-8 -mt-14">
                <div className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center out border-solid border-2 border-primer ">
                    <div className="flex">
                        <div className="mr-4">
                            <img className="shadow sm:w-12 sm:h-12 w-14 h-14 rounded-full bg-gray-100" src="public/img/ellipse.svg" alt="Avatar" />
                        </div>
                        <div>
                            <h1 className=" text-2xl font-normal text-[#91D36E]">Lapangan Garuda</h1>
                            <p className="text-gray-600">Kode Booking: 696984854954</p>
                        </div>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#91D36E]"/>
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#91D36E]" checked/>
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#91D36E]"/>
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#91D36E]"/>
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#91D36E]"/>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
)