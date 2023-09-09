import { sidebarLinks } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter} from 'next/navigation'

function LeftBar(){
    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-0.5 px-6">
                {sidebarLinks.map((link) => {
                    return (
                        <Link href={link.route} key={link.label} className="leftsidebar_link">
                            <Image src={link.imgURL} alt={link.label} width={16} height={16} />
                            <p className="text-light-1 max-lg:hidden">{link.label}</p>
                        </Link>
                    );
                })}
            </div>

        </section>
    )
}

export default LeftBar