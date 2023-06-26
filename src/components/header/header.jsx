import './header.css'

    
const menu = ['Home', 'Properties', 'Agents', 'Blog', 'About', 'Contact', 'Sign Up']

export default function Header() {
    return (
        <header className="col-12 m-0 p-0 d-flex flex-wrap justify-content-between bg-dark head p-4 p-md-0">
            <Hamelt />
            <Menu />
            <MenuMobile />

        </header>
    )
}


function Hamelt() {
    return (
        <div className="col-2 txt">
            <h2 className="fs-4 pt-2">Hamelt.</h2>
        </div>
    )
}

function MenuMobile() {
    return (
        <div className='d-flex d-lg-none mobile col-2'>
            <a href=""><i class="bi bi-list text-light"></i>MENU</a>
        </div>
    )
}


function Menu() {
    return (
        <nav className="d-none d-lg-flex col-10 menu">
            <ul className="col-11 menu d-flex flex-wrap justify-content-end list-group-numbered">
                {menu.map(function (val) {
                    return <li className="col-1">{val}</li>
                })}
            </ul>
        </nav>
    )
}