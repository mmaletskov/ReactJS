import './Footer.css';
export default function Footer(){
    return(
        <>
        <footer>
            <div className="container">
                <div className="footer__inner">
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
        </footer>
        </>
    )
}