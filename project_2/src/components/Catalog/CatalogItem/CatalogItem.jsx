import './CatalogItem.css'
import { catalog } from '../../../../database'
import { Link } from 'react-router-dom'
import ModalWindow from '../../ModalWindow/ModalWindow';


export default function CatalogItem({name,price,id,ostatok}){
    if(ostatok == 0){
        return (
            <div className="catalog__item">
                <img src="/public/images/catalog/catalog.png" alt="" />
                <h3 className="catalog__item-title">{ name }</h3>
                <div className="catalog__item-action">
                    <p className="action__price">{ price } ₽</p>
                        <ModalWindow/>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="catalog__item">
                <img src="/public/images/catalog/catalog.png" alt="" />
                <h3 className="catalog__item-title">{ name }</h3>
                <div className="catalog__item-action">
                    <p className="action__price">{ price } ₽</p>
                        <div className="action__price-btn">
                            <Link to={`${id}`}>В корзину</Link>
                        </div>       
                </div>
            </div>
    
        )
    }
}