import './CatalogItem.css'
import { catalog } from '../../../../database'
import { Link } from 'react-router-dom'

export default function CatalogItem({name,price,id}){
    return (
        <div className="catalog__item">
            <img src="/public/images/catalog/catalog.png" alt="" />
            <h3 className="catalog__item-title">{ name }</h3>
            <div className="catalog__item-action">
                <p className="action__price">{ price } ₽</p>
                <div className="action__price-btn">
                    <Link to={`${id}`}>Подробнее</Link>
                </div>
            </div>
        </div>

    )
}