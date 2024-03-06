import './CatalogItemPage.css'
import { useParams } from "react-router-dom";
import { catalog } from "../../../../database";

export default function CatalogItemPage(){
    const {id} = useParams();
    const product = catalog.find(product => product.id === parseInt(id))

    return(
        <div className="catalog__item-descr">
            <img src="/public/images/catalog/catalog.png" alt="" />
            <div className="descr">
                <h1>{product.name}</h1>
                <p>{product.price} руб</p>
            </div>
        </div>
    )
}