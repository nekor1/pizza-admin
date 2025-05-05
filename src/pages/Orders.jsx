import OrderList from "../components/Orders/OrderList";

function Orders () {
    return (
        <section class="block">
        <div class="container">
            <div class="block-header">
                <h1 class="title">Заказы</h1>
            </div>
            <OrderList />
        </div>
    </section>
    );
}

export default Orders;