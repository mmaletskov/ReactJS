import './Header.css';
export default function Header(){
    return(
        <>
        <header>
            <div className="container">
                <div className="header__inner">
                    <div className="logo">
                        logo
                    </div>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#" className="menu__link">Главная</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Главная</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Главная</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}