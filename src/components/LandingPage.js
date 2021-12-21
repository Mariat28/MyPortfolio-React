// import {BiSearchAlt2, BiCaretDown} from 'react-icons/bi';
// import LazyLoad from "react-lazyload";
import heroImg from '../assets/green-shirt.png';
import {TiSocialFacebook} from 'react-icons/ti';
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
const clipDiv ={
    clipPath: "polygon(0% 0%, 100% 0%, 120% 50%, 90% 250%)", //(x,y), (x,y) (top), (x,y), (x,y)(bottom), 
}
const LandingPage = () => {
    return (
        <>
            <div className=" w-3/5 sm:w-1/2  grid sm:grid-rows-2 grid-rows-4  bg-white-300 relative">
                <div className="flex justify-start sm:justify-center mt-3 ">
                    <h3 className="font-medium  text-xl font-sans text-slate-700 -mr-10">Frontend<span className="text-teal-500 font-sans font-semibold">Developer.</span></h3>
                </div>
                <div className="flex flex-row sm:justify-around justify-center">
                    <div className="bg-white flex invisible sm:visible flex-col rounded-2xl px-2 mb-16 shadow-md border border-teal-500 justify-around">
                        <TiSocialFacebook className='text-gray-300 hover:animate-bounce hover:text-blue-600'/>
                        <AiOutlineTwitter className='text-teal-700 hover:animate-bounce hover:text-blue-600'/>
                        <AiOutlineInstagram className='text-gray-300 hover:animate-bounce'/>
                        <FaLinkedinIn className='text-gray-300 hover:animate-bounce'/>
                    </div>
                    <div className=" flex-col sm:-ml-8 pl-1 fixed right-0 px-3 sm:static  sm:place-content-center sm:w-1/2 ">
                        <h3 className="font-mono font-semibold hover:font-serif text-teal-500 py-2">Hello I'm</h3>
                        <h1 className="font-extrabold text-slate-700 text-2xl">Ndagire Mariat</h1>
                        <p className="py-2 text-sm text-slate-700">Professional freeLancer & Frontend Developer</p>
                        <p className="font-thin  font-['Open_Sans'] text-sm sm:text-slate-500 text-start">I transform UI/UX designs into crisp looking user interfaces that will leave your clients in awe and give you an edge over your competition.</p>
                        <button className="bg-teal-500 px-3 py-1 rounded-sm text-white text-sm font-sans my-5 transition delay-150 ease-in-out hover:translate-x-1 hover:scale-110 duration-300 hover:bg-teal-600">Hire Me</button>
                    </div>
                </div>
                <div className=' flex justify-center absolute bottom-0 -right-64'>
                    <img src={heroImg} alt="hero-img" className="z-10 h-96" />
                </div>
            </div>
            <div className=" w-2/5 sm:w-1/2 px-4  bg-teal-500 invisible sm:visible " style={clipDiv}>
                <div className=" px-4  bg-teal-500 ">
                    <div className="flex flex-row bg-white-300 justify-between transform">
                        <button className="bg-teal-500 text-white  font-sans border-b-white border-b-2 px-1 text-sm font-semibold border-dashed hover:border-b-teal-800 hover:text-teal-800 mt-3">Home</button>
                        <button className="bg-teal-500 text-white  px-1 text-sm hover:text-teal-800 hover:border-b-teal-800 hover:border-b-2 border-dashed mt-3">Why Me</button>
                        <button className="bg-teal-500 text-white  px-1 text-sm hover:text-teal-800 hover:border-b-teal-800 hover:border-b-2 border-dashed mt-3">Services</button>
                        <button className="bg-teal-500 text-white  px-1 text-sm hover:text-teal-800 hover:border-b-teal-800 hover:border-b-2 border-dashed mt-3">Projects</button>
                        <button className="bg-teal-500 text-white  px-1 text-sm hover:text-teal-800 hover:border-b-teal-800 hover:border-b-2 border-dashed mt-3">Get in touch</button>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default LandingPage;