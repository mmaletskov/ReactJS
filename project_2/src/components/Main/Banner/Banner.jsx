import './Banner.css';

export default function Banner(){
    return(
        <>
            <section className="banner">
                <div className="container">
                    <div className="banner__inner">
                        <img className="banner__inner-title" src="/public/images/banner/logo_banner.png" alt="" />
                        <h2 className="banner__inner-subtitle">БРЕНД ОДЕЖДЫ</h2>
                        <a href="" className="banner__inner-btn">Перейти в категории</a>
                    </div>
                </div>
            </section>
        </>
    )
}