import React from "react";
import style from "./page.module.scss";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createEvent } from "../../services/createEvent";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllUsers } from "../../../user/services/getAllUsers.services";

const CreateEvent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            local: "",
            description: "",
            firstDay: "",
            imageUrl: "",
            idUser: "",
            startTime: "",
            registrationLink: "",
            lastDay: "",
        },
    });

    const { data } = useQuery({
        queryKey: ["AllUsers"],
        queryFn: getAllUsers,
        initialData: [],
    });
    
    const navigate = useNavigate();

    const {
        mutate: handleCreateEvent,
        isPending,
    } = useMutation({
        mutationFn: async (data: any) => await createEvent(data),
        onSuccess: (response) => {
            toast.success(response.message, {
                position: "top-right",
            });
            navigate("/");
        },
        onError: (response) => {
            toast.error(response.message, {
                position: "top-right",
            });
        },
    });

    return (
        <div className={style.page}>
            <h1>Criar evento</h1>
            <form
                onSubmit={handleSubmit((data) => {
                    console.log("content: ", data);
                    handleCreateEvent(data);
                })}
            >
                <div>
                    <div className={style.inputcontainer}>
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Campo obrigatório",
                            })}
                        />
                        <p>{errors.name?.message}</p>
                    </div>

                    <div className={style.inputcontainer}>
                        <label htmlFor="local">Local</label>
                        <input
                            type="text"
                            {...register("local", {
                                required: "Campo obrigatório",
                            })}
                        />
                        <p>{errors.local?.message}</p>
                    </div>

                    <div className={style.inputcontainer}>
                        <label htmlFor="firstDay">Dia do evento</label>
                        <input
                            type="date"
                            {...register("firstDay", {
                                required: "Campo obrigatório",
                            })}
                        />
                        <p>{errors.firstDay?.message}</p>
                    </div>

                    <div className={style.inputcontainer}>
                        <label htmlFor="startTime">Horário de início</label>
                        <input
                            type="time"
                            {...register("startTime", {
                                required: "Campo obrigatório",
                            })}
                        />
                        <p>{errors.startTime?.message}</p>
                    </div>
                </div>

                <div>
                    <div className={style.inputcontainer}>
                        <label htmlFor="imageUrl">
                            URL da imagem do evento
                        </label>
                        <input
                            type="text"
                            {...register("imageUrl", {
                                required: "Campo obrigatório",
                            })}
                        />
                        <p>{errors.imageUrl?.message}</p>
                    </div>

                    <div className={style.inputcontainer}>
                        <label htmlFor="registrationLink">
                            Link de inscrição
                        </label>
                        <input
                            type="text"
                            {...register("registrationLink", {
                                required: "Campo obrigatório",
                            })}
                        />
                        <p>{errors.registrationLink?.message}</p>
                    </div>

                    <div className={style.inputcontainer}>
                        <label htmlFor="idUser">Responsável pelo evento</label>
                        <select {...register("idUser", {
                                required: "Campo obrigatório",
                            })}>
                            <option value=""></option>
                            {data.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.username}
                                </option>
                            ))}
                        </select>
                        <p>{errors.idUser?.message}</p>
                    </div>
                </div>

                <div className={style.inputcontainer}>
                    <label htmlFor="description">Descrição evento</label>
                    <textarea
                        {...register("description", {
                            required: "Campo obrigatório",
                        })}
                        cols={120}
                        rows={20}
                    />
                    <p>{errors.description?.message}</p>
                </div>

                <input type="submit" value={isPending ? 'Cadastrando...' : 'Cadastrar evento'} disabled={isPending}/>
            </form>
        </div>
    );
};

export default React.memo(CreateEvent);
