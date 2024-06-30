import React from "react";
import style from "./header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <h6>Eventos Tech Floripa</h6>
            <ul>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Eventos
                </NavLink>
                <NavLink
                    to="/usuarios"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Usuários
                </NavLink>
                <NavLink
                    to="/criar-evento"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Cadastrar Eventos
                </NavLink>
                <NavLink
                    to="/criar-usuario"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Cadastrar Usuários
                </NavLink>
            </ul>
        </header>
    );
};

export default React.memo(Header);
