import {INavItem} from "@/interfaces/navitem";
import {NavItem} from "@/app/(withnavbar)/navitem";

const navItems: INavItem[] = [
    {label: 'Movies', href: '/films'},
    {label: 'People', href: '/people'},
    {label: 'Planets', href: '/planets'},
    {label: 'Species', href: '/species'},
    {label: 'Starships', href: '/starships'},
    {label: 'Vehicles', href: '/vehicles'}]
export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return <div className={"xl:px-12"}>
        <header className={'flex items-center justify-center py-12 text-2xl'}>Swapi Wars</header>
        <nav className={"z-50 sticky top-0 bg-black"}>
            <div className={'flex flex-col md:flex-row justify-between'}>{navItems.map((navItem) => <NavItem label={navItem.label} href={navItem.href} key={navItem.href}/>)}</div>
        </nav>
        <main className={"relative pt-6"}>{children}</main>
    </div>
}
