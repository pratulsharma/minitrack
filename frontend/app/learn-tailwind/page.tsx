// export default function learTailwind(){
//     return(
//      <main className="min-h-screen bg-slate-700">
//         <div className="flex justify-center text-amber-300 align-middle bg-amber-600 w-half mt-10 p-5">
//             <h1> Fname Lname</h1>
//             <p> This is a sample div</p>
//         </div>
// </main>
//     )
// }
import Image from 'next/image';
export default function LearnTailwind() {
    return (
        <main className=" min-h-screen flex bg-slate-100 justify-center items-center">
            <div className=" bg-white w-180 rounded-2xl p-5 items-center flex-col flex">
                <Image
                    src="/profile-placeholder.png"
                    alt="Alex Johnson profile"
                    width={112}
                    height={112}
                    className="size-28 rounded-full object-cover ring-4 ring-amber-200"
                />
                <h1 className="text-2xl font-bold text-amber-800 mt-4">
                    Welcome Back !
                </h1>
                <p className="text-slate-500 ">
                    Please enter yoiur details
                </p>
                <div className="flex flex-col m-1">
                    <label className="text-black font-bold text-sm mb-2"> Email Address</label>
                    <input className="border border-amber-600 rounded" />
                    <label className="text-black font-bold text-sm mb-2 mt-4"> Password</label>
                    <input className="border border-amber-600 rounded" />
                </div>
                <button className="bg-blue-700 p-3 m-4 font-bold rounded-2xl w-full">
                    Login
                </button>
            </div>
        </main>
    );
}