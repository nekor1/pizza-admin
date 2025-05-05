import Logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom";
import { PRODUCTS, DASHBOARD, ORDERS, HELP } from "../utils/consts";

function SideBar () {
    return (
        <div class="sidebar">
            <Link to={DASHBOARD} class="logo">
                <img src={Logo} alt="Logo" />
                <span class="logo-text">Pizzafy.</span>
            </Link>
            <nav class="sidebar-nav">
                <Link to={DASHBOARD} class="sidebar-nav__link">
                    Главная
                </Link>
                <Link to={PRODUCTS} class="sidebar-nav__link">
                    Товары
                </Link>
                <Link to={ORDERS} class="sidebar-nav__link">
                    Заказы
                </Link>
                <Link to={HELP} class="sidebar-nav__link">
                    Помощь
                </Link>
            </nav>
            <p class="sm-text">&copy;2025, Pizzafy. Все права защищены</p>
        </div>
    );
}

export default SideBar;