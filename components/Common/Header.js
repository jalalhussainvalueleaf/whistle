import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header({toggleLogin}) {
const pathname = usePathname();

  return (
    <div className='p-4 flex items-center justify-between absolute w-full z-50'>
      {pathname ==='/'?<div></div>:<Link href="/"><Image src="/images/whl-logo.png" width={400} height={400} className='w-28'/></Link>}
      {pathname ==='/'?<button className="rounded-full bg-wlOrange px-8 py-2 text-white" onClick={() => toggleLogin()}>Login</button>:<Link href="" className="rounded-full bg-wlOrange px-8 py-2 text-white">Login</Link>}
        
    </div>
  )
}

export default Header