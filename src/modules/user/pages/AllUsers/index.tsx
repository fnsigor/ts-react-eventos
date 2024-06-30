import React from "react";
import style from "./page.module.scss";
import { useQuery } from "@tanstack/react-query";
import Spin from "../../../../components/Spin";
import { getAllUsers } from "../../services/getAllUsers.services";

const AllEvents = () => {
    const { data, isError, isPending, error } = useQuery({
        queryKey: ["AllUsers"],
        queryFn: getAllUsers,
        initialData: [],
    });

    return (
        <section className={style.page}>
            
            <h1>Usuários cadastrados</h1>

            {isPending ? (
                <Spin />
            ) : isError ? (
                <p>{error.message}</p>
            ) : (
                <ul>
                    {data.map((user) => (
                        <li key={user.id}>
                            <h6>{user.username}</h6>
                            <p>{user.email}</p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default React.memo(AllEvents);
