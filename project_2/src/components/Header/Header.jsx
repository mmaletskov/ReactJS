import './Header.css';

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
                            <a href="#" className="menu__link">главная</a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">каталог</a>
                        </li>
                        <hr />
                        <li className="menu__item">
                            <a href="" className="menu__link">информация</a>
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