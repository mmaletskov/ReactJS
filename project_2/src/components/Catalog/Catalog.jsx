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
                    <CatalogItem/>
                </div>
            </div>
        </section>
        </>
    )
}