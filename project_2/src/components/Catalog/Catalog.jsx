import './Catalog.css';
import CatalogCategories from './CatalogCategories/CatalogCategories';
import CatalogItem from './CatalogItem/CatalogItem';
import { catalog } from '../../../database';

export default function Catalog(){
    return(
        <>
        <section className="catalog">
            <div className="container">
                <div className="catalog__inner">
                    <CatalogCategories />
                  <div className="catalog__list">
                        {catalog.map((card,index) =>{
                            return(
                                <CatalogItem key={index} {...card}/>
                            )
                        })}
                  </div>
                </div>
            </div>
        </section>
        </>
    )
}