import './Catalog.css';
import CatalogCategories from './CatalogCategories/CatalogCategories';
import CatalogItem from './CatalogItem/CatalogItem';

export default function Catalog(){
    return(
        <>
        <section className="catalog">
            <div className="container">
                <div className="catalog__inner">
                    <CatalogCategories />
                  <div className="catalog__list">
                    <CatalogItem name="Футболка" price="2305"/>
                    <CatalogItem name="Футболка2" price="5325"/>
                    <CatalogItem name="Футболка3" price="795"/>
                  </div>
                </div>
            </div>
        </section>
        </>
    )
}