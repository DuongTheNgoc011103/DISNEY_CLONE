import React from 'react'
import { useState } from 'react'
import logo from './../assets/Images/logo_light.png'
import user from './../assets/Images/user.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import {
    HiDotsVertical,
    HiPlus
} from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
    
    const [toggle, setToggle] = useState(false);
    
    const menuItems = [
        {
            name: "HOME",
            icon: HiHome
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass
        },
        {
            name: "WATCH LIST",
            icon: HiPlus
        },
        {
            name: "ORIGINALS",
            icon: HiStar
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle
        },
        {
            name: "SERIES",
            icon: HiTv
        }
    ]
    return (
        <div className='flex items-center p-2 justify-between mx-5'>
            <div className='flex gap-8 items-center'>
                <img src={logo} alt="" 
                className='w-[80px] md:w-[100px] object-cover cursor-pointer' />
                <div className='hidden md:flex gap-8 items-center'>
                    {menuItems.map((item, index) => (
                        <HeaderItem key={index} name={item.name} icon={item.icon}/>
                    ))}
                </div>
                
                <div className='flex md:hidden gap-8 items-center'>
                    {menuItems.map((item, index) => index<3&& (
                        <HeaderItem key={index} name={''} icon={item.icon}/>
                    ))}
                </div>
                <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                    <HeaderItem name={''} icon={HiDotsVertical} />
                    {toggle && (
                        <div className='absolute mt-3 bg-[#181818] p-3 rounded 
                            border border-[#181818] px-4 flex flex-col gap-3 z-10'>
                            {menuItems.map((item, index) => index > 2 && (
                                <HeaderItem key={index} name={item.name} icon={item.icon} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <img src={user} className='w-[45px] rounded-full cursor-pointer' alt="" />
        </div>
    )
}

export default Header
