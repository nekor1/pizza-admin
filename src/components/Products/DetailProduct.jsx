import { useEffect, useState } from "react";
import ProductsBack from "./ProductsBack";
import { Link, useParams } from "react-router-dom";
import { a } from "../../services/axiosinstance";
function DetailProduct () {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchProduct() {
            try{
                const res = await a.get(`/products/${id}`);
                console.log(res.data)
                setProduct(res.data);
            }catch(error){
                console.error("Error: ", error)
            }
        }
        fetchProduct();
    }, [id])
    return (
        <section class="block">
            <div class="container">
                <ProductsBack />
                <h1 class="title">Детали товара</h1>
                <div class="product-detail">
                    <img src={product.image} alt={product.name} class="product-img" />
                    <div class="product-detail__content">
                        <h2 class="product-detail__title">{product.name}</h2>
                        <p>Цена: {product.price} &#8376;</p>
                        <p>Описание: {product.description}</p>
                        <p>Категория: <span class="category-badge">{product.category}</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailProduct;