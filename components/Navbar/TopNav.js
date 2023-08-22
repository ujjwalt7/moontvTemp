import Link from 'next/link'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdNotificationsNone } from 'react-icons/md'

export default function TopNav() {
  return (
    <div className='w-full px-6 py-3 border-b-2 border-grey'>
        <div className="w-full flex justify-between items-center">
            <Link href={`/search`} className="px-4 py-2 pr-10 bg-grey justify-center items-center gap-2 rounded-lg flex text-greyLight">
                <div className="text-xl">
                <BiSearch />
                </div>
                Search Movies,Tv shows,etc....    
            </Link>
            <div className="flex gap-3 items-center">
                <div className="p-3 text-2xl text-white rounded-full hover:bg-grey transition-all duration-200 h-fit">
                    <MdNotificationsNone />
                </div>
                <div className="flex px-4 py-2 rounded-full items-center gap-2 text-gray-300  font-medium hover:bg-grey transition-all duration-300 ">
                    Login/Sign Up
                </div>
            </div>
        </div>
    </div>
  )
}
