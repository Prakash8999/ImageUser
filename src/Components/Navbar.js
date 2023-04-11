import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome, AiFillContacts, AiOutlineMenu, AiFillAliwangwang } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc'
import { RxCross1 } from 'react-icons/rx'
import { CiImageOn } from 'react-icons/ci'
import { BsFillImageFill } from 'react-icons/bs'

const Navbar = () => {

	const [expand, setExpand] = useState(false)
	const toggle = () => {
		setExpand(!expand)
	}
	return (
		<>
			<div className='hidden md:block'>
				<nav className=' pt-3  pb-3 flex justify-between pl-12 pr-12 shadow hover:shadow-lg duration-500 absolute w-full  text-white'>
					<Link to="/" className=' text-xl flex items-center  gap-x-1 cursor-pointer'><p className='text-2xl'><BsFillImageFill /></p> <p className='text-2xl font-mono'>ImageIndia</p></Link>
					<ul className='flex gap-x-40  '>

						<li>
							<Link to="/" className='flex flex-col items-center' ><AiFillHome />Home</Link>
						</li>
						<li>
							<Link to="/about" className='flex flex-col items-center' ><FcAbout />About  </Link>
						</li>
						<li>
							<Link to="/contact" className='flex flex-col items-center' ><AiFillContacts />Contact </Link>
						</li>
					</ul>
				</nav>
			</div>



			<div className='block md:hidden ' >
				<div className='flex justify-between bg-slate-50 pt-6 pr-6 pb-6 '>

					<div className=' text-xl flex items-center pl-6 gap-x-1'>
						<p className='text-2xl'><CiImageOn /></p> <p className='text-2xl font-mono'>ImageIndia</p>
						</div>
					<button onClick={toggle} className="inline-flex items-center justify-center  rounded-md transition duration-150 ease-in-out">

						<div className={`${expand ? 'hidden' : 'block'} h-6 w-6 text-black text-2xl active:bg-none`}>
							<AiOutlineMenu />
						</div>

						<div className={`${expand ? 'block' : 'hidden'} h-6 w-6 text-black text-2xl active:bg-none`}>
							<RxCross1 />
						</div>

					</button>

				</div>
				<hr />

				<div>
					<nav className={`${expand ? 'block' : 'hidden'} flex justify-center items-center bg-slate-50 duration-500 absolute w-full h-[50vh] overflow shadow-xl`} >
						<ul className='flex flex-col gap-y-10 items-center pb-2 rounded-md'>
							<li>
								<Link to="/" className='text-2xl hover:font-semibold' >Home</Link>
							</li>
							<li>
								<Link to="/about" className='text-2xl hover:font-semibold' >About  </Link>
							</li>
							<li>
								<Link to="/contact" className='text-2xl hover:font-semibold'>Contact </Link>
							</li>
						</ul>


					</nav>
				</div>

			</div>
		</>
	)
}

export default Navbar