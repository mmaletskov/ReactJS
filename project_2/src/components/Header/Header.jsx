import './Header.css';
import { Link } from 'react-router-dom';

export default function (){
    return(
        <>
        <header>
            <div className="container">
                <div className="header__inner">
                    <ul className="menu__list">
                    <div className="logo">
                        <img src="/public/images/header/logo.svg" alt="logo" />
                    </div>
                        <hr />
                        <li className="menu__item">
                            <Link to="/" className="menu__link">Главная</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/catalog" className="menu__link">Каталог</Link>
                        </li>
                        <hr />
                        <li className="menu__item">
                            <Link to="/info" className="menu__link">Информация</Link>
                        </li>
                    </ul>
                    <div className="header__buttons">
                        <img src="/public/images/header/search.svg" alt="" />
                        <img src="/public/images/header/basket.svg" alt="" />
                        <img src="/public/images/header/liked.png" alt="" />
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}