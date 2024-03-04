import './CatalogCategories.css'
import { nameCateg } from '../../../../database'

export default function CatalogCategories(){
    return(
        <>
        <section className="category">
            <div className="container">
                <div className="category__inner">
                   <a href="" className="category__inner-item">Все</a>
                   <a href="" className="category__inner-item">Топ</a>
                   <a href="" className="category__inner-item">Низ</a>
                   <a href="" className="category__inner-item">Обувь</a>
                </div>
            </div>
        </section>
        </>
    )
}