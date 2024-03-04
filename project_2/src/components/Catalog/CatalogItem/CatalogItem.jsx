import './CatalogItem.css'

export default function CatalogItem({name,price}){
    return (
        <div className="catalog__item">
            <img src="/public/images/catalog/catalog.png" alt="" />
            <h3 className="catalog__item-title">{ name }</h3>
            <div className="catalog__item-action">
                <p className="action__price">{ price } ₽</p>
                <div className="action__price">
                    <img src="/public/images/catalog/action.png" alt="" />
                </div>
            </div>
        </div>

    )
}