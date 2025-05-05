import { useState } from "react";
import ProductsBack from "./ProductsBack";
import { a } from "../../services/axiosinstance";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../utils/consts";

function CreateProduct () {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(''); 
    const [image, setImage] = useState(''); 
    const [category, setCategory] = useState(''); 
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        const newProduct = {
            name: name,
            price: Number(price),
            description: description,
            image: image,
            category: category,
        };

        try{
            const res = await a.post('/products', newProduct)
            alert('Товар добавлен!');
            setName('');
            setPrice('');
            setDescription('');
            setImage('');
            setCategory('');
            navigate(PRODUCTS)
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    return (
        <section class="block">
            <div class="container">
                <ProductsBack />
                <h1 class="title">Создать товар</h1>
                <form class="form" onSubmit={handleSubmit}>
                    <div class="form-control">
                        <label for="name">Название товара</label>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="name" 
                            type="text" 
                            placeholder="Введите товара" 
                            required 
                        />
                    </div>
                    <div class="form-control">
                        <label for="price">Цена</label>
                        <input 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            id="price" 
                            type="number" 
                            placeholder="Введите цену" 
                            required 
                        />
                    </div>
                    <div class="form-control">
                        <label for="description">Описание</label>
                        <textarea 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            id="description" 
                            placeholder="Введите описание" 
                            required 
                        ></textarea>
                    </div>
                    <div class="form-control">
                        <label for="image">Фото</label>
                        <input 
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            id="image" 
                            type="url" 
                            placeholder="Вставьте URL фото" 
                            required 
                        />
                    </div>
                    <div class="form-control">
                        <label for="category">Категория</label>
                        <input 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            id="category" 
                            type="text" 
                            placeholder="Введите категорию" 
                            required 
                        />
                    </div>
                    <button class="btn bg-primary" type="submit">Создать</button>
                </form>
            </div>
        </section>
    );
}

export default CreateProduct;