import './CatalogItem.css'
import { catalog } from '../../../../database'

export default function CatalogItem(props){
    return (
        <div className="catalog__item">
            <img src="/public/images/catalog/catalog.png" alt="" />
            <h3 className="catalog__item-title">{ props.name }</h3>
            <div className="catalog__item-action">
                <p className="action__price">{ props.price } ₽</p>
                <div className="action__price">
                    <img src="/public/images/catalog/action.png" alt="" />
                </div>
            </div>
        </div>

    )
}