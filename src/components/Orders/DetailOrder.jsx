import { Link, useParams } from "react-router-dom";
import { ORDERS } from "../../utils/consts";
import { useEffect, useState } from "react";
import { a } from "../../services/axiosinstance";
import Loading from "../Loading";

function DetailOrder () {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchOrder() {
            try {
                setIsLoading(true);
                const res = await a.get(`/orders/${id}`);
                setOrder(res.data);
            } catch (error) {
                    console.error("Ошибка:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchOrder();
    }, [id]);

    if (isLoading) return <Loading />;
    if (!order) return null;

    return (
        <section className="block">
            <div className="container">
                <Link to={ORDERS} className="btn bg-danger">Назад</Link>
                <h1 className="title">Детали заказа</h1>
                <div className="order-detail">
                    <p><strong>Имя клиента: </strong>{order.customer.name}</p>
                    <p><strong>Телефон клиента: </strong>{order.customer.phone}</p>
                    <p><strong>Город, адрес: </strong>{order.customer.city}, {order.customer.address}</p>
                    <div className="order-data">
                        <h2 className="title">Товары для заказа</h2>
                        <div className="order-data__list">
                            {order.items?.map((item, idx) => (
                                <p key={idx}>
                                    {item.name}, количество: {item.quantity}, цена: {item.price} &#x20BF;, итого: {Number(item.price) * Number(item.quantity)} &#x20BF;
                                </p>
                            ))}
                        </div>
                    </div>
                    <h2 className="title">
                        Итого: {
                            order.items?.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0).toFixed(2)
                        } &#x20BF;
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default DetailOrder;