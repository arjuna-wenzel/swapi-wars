import {INavItem} from "@/interfaces/navitem";
import {NavItem} from "@/app/(withnavbar)/navitem";

const navItems: INavItem[] = [
    {label: 'Movies', href: '/films'},
    {label: 'People', href: '/people'},
    {label: 'Planets', href: '/planets'},
    {label: 'Species', href: '/species'},
    {label: 'Starships', href: '/starships'},
    {label: 'Vehicles', href: '/vehicles'}]
export default function ({
                             children,
                         }: {
    children: React.ReactNode
}) {
    return <div className={"relative min-h-screen w-full flex flex-col gap-6"}>
        <div className={"flex justify-evenly"}>{navItems.map((navItem) => <NavItem label={navItem.label} href={navItem.href} key={navItem.href}/>)}</div>
        <main className={""}>{children}</main>
    </div>
}
