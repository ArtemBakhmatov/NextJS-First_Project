import Link from "next/link";

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>
        <h1>About us</h1>
        <ul>
            <li><Link href='/about/contacts' style={{color: 'black'}}>Contacts</Link></li>  
            <li><Link href='/about/team' style={{color: 'black'}}>Team</Link></li>   
        </ul>
        {children}
    </div>
}