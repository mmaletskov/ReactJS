import './Catalog.css';
import CatalogCategories from './CatalogCategories/CatalogCategories';
import CatalogItem from './CatalogItem/CatalogItem';
import { catalog } from '../../../database';
import { useState } from 'react';

export default function Catalog(){

    const[searchQuery,setSearchQuery] = useState("");

    const searchProducts = catalog.filter(
        (item) => item.name.toLowerCase().includes(searchQuery)
    )
    
    return(
        <>
        <section className="catalog">
            <div className="container">
                <div className="catalog__inner">
                    <CatalogCategories />
                    <input type="search" placeholder="Поиск" onChange={(e) =>setSearchQuery(e.target.value) } />
                  <div className="catalog__list">
                        {
                        searchProducts.length ?    
                        searchProducts.map((card,index) =>{
                            return(
                                <CatalogItem key={index} {...card}/>
                            )
                        })
                    :
                    <p>По запросу {searchQuery} ничего не найдено</p>
                    }
                  </div>
                </div>
            </div>
        </section>
        </>
    )
}