import Link from 'next/link'
import Image from 'next/image'  

function TopBar(){
    return (
        <nav className="topbar">
            <Link href='/' className='flex items-center gap-4'>
                <Image src='/assets/guya2.svg' alt='logo' width={40} height={40} />
                <p className="text-heading3-bold text-light-1 max-xs:hidden">neuScans</p>
            </Link>
        </nav>
    )
}

export default TopBar