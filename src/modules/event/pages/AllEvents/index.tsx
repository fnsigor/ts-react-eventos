import React from "react";
import style from "./page.module.scss";
import { useQuery } from "@tanstack/react-query";
import Spin from "../../../../components/Spin";
import CardEvent from "../components/CardEvent";
import { getAllEvents } from "../../services/getAllEvents.services";

const AllEvents = () => {
    const { data, isError, isPending, error } = useQuery({
        queryKey: ["AllEvents"],
        queryFn: getAllEvents,
        initialData: [],
    });

    return (
        <section className={style.page}>
            
            <h1>Eventos cadastrados</h1>

            {isPending ? (
                <Spin />
            ) : isError ? (
                <p>{error.message}</p>
            ) : (
                <ul>
                    {data.map((event) => (
                        <li key={event.id}>
                            <CardEvent event={event} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default React.memo(AllEvents);
