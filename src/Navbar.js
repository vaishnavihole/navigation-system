export default function Navbar() {
    const path = (window.location.pathname)
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                Site Name
            </a>
            <ul>
                <CustomLink  href="/pricing">Pricing</CustomLink>
                <CustomLink  href="/about">Pricing</CustomLink>
                
            </ul>
        </nav>
    )
}

 function CustomLink({href,childern, ...props}){
   return(
    <li>
    <a href={href}>{childern}</a>
   </li>
   )           

}