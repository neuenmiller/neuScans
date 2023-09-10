import Link from 'next/link'
import Image from 'next/image'  
import { SignedIn, SignOutButton, OrganizationSwitcher } from '@clerk/nextjs'  

function TopBar(){
    return (
        <nav className="topbar">
            <Link href='/' className='flex items-center gap-4'>
                <Image src='/assets/guya2.svg' alt='logo' width={40} height={40} />
                <p className="text-heading3-bold text-light-1 max-xs:hidden">neuScans</p>
            </Link>

            <div className="flex items-center gap-1">
                    <div className='block md:hidden'>
                        <SignedIn>
                            <SignOutButton>
                                <div className='flex cursor-pointer'>
                                    <Image 
                                    src='/assets/logout.svg' 
                                    alt='logout' 
                                    width={24} height={24}
                                    />
                                </div>
                            </SignOutButton>
                        </SignedIn>
                    </div>

                    <OrganizationSwitcher
                    appearance={{
                        elements: {organizationSwitcherTrigger: 'py-2 px-4 rounded-md bg-light-1 text-heading3-bold text-dark-1'},
                    }}/>
            </div>

        </nav>
    )
}

export default TopBar