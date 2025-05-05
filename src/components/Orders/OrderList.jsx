import { useEffect, useState } from "react";
import { a } from "../../services/axiosinstance";
import Loading from "../Loading";
import OrderItem from "./OrderItem";

function OrderList () {


    const [orders, setOrders] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect (() => {
        async function fetchOrders () {
            try {
                setIsloading(true);
                const res = await a.get('/orders');
                setOrders(res.data);
            } catch (error) {
                console.error("Ошибка : ", error);
            } finally {
                setIsloading(false);
            }
        }
        fetchOrders();
    }, []);

    return (
        <>
            {isLoading ? <Loading /> : <>
                <table class="table">
                    <thead>
                        <th>№</th>
                        <th>Клиент</th>
                        <th>Дата и время заказа</th>
                        <th>Действие</th>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <OrderItem key={order.id} order={order}/>
                        ))}
                    </tbody>
                </table>
            </>}
        </>
    );
}

export default OrderList;