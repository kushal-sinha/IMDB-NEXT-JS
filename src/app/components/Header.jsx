
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Menu_Item from './Menu_Item'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='flex justify-between items-center p-3 max-w-6px mx-auto'>
            <div className='flex gap-4'>
                <Menu_Item title="home" address="/" Icon={AiFillHome} />
                <Menu_Item title="about" address="/about" Icon={BsFillInfoCircleFill} />


            </div>
            <Link href={'/'} className='felx gap-1 items-center'>
                <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded lg'>IMDB</span>
                <span className='text-xl hidden sm:inline'>Clone</span>

            </Link>
        </div>
    )
}
