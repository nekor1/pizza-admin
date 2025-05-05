import { Link, useParams, useNavigate } from "react-router-dom";
import { ORDERS } from "../../utils/consts";
import { useEffect, useState } from "react";
import { a } from "../../services/axiosinstance";

function DeleteOrder () {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        async function fetchOrder() {
            try {
                const res = await a.get(`/orders/${id}`);
                setOrder(res.data);
            } catch (error) {
                console.error("Ошибка: ", error);
            }
        }
        fetchOrder();
    }, [id]);

    async function handleDelete(e) {
        e.preventDefault();
        try {
            await a.delete(`/orders/${id}`);
            alert("Заказ успешно удалён!");
            navigate(ORDERS);
        } catch (error) {
            console.error("Ошибка: ", error);
        }
    }

    if (!order) return null;

    return (
        <section className="block">
            <div className="container">
                <h1 className="title">Вы действительно хотите удалить заказ №{order.id}?</h1>
                <p className="mb-5">
                    Это действие приведет к потере всех данных, связанных с этим заказом. Пожалуйста, подтвердите свое решение.
                </p>
                <form className="actions-sm" onSubmit={handleDelete}>
                    <button type="submit" className="btn bg-danger">
                        Да
                    </button>
                    <Link to={ORDERS} className="btn bg-primary">
                        Нет
                    </Link>
                </form>
            </div>
        </section>
    );
}

export default DeleteOrder;