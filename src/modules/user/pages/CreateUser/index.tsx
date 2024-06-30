import React from "react";
import style from "./page.module.scss";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/createUser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    });


    const navigate = useNavigate();

    const {
        mutate: handleCreateEvent,
        isPending,
    } = useMutation({
        mutationFn: async (data: any) => await createUser(data),
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
            <h1>Criar usuário</h1>
            <form
                onSubmit={handleSubmit((data) => {
                    console.log("content: ", data);
                    handleCreateEvent(data);
                })}
            >
                <div>
                    <div className={style.inputcontainer}>
                        <label htmlFor="name">Nome de usuário</label>
                        <input
                            type="text"
                            {...register("username", {
                                required: "Campo obrigatório",
                            })}
                        />
                        <p>{errors.username?.message}</p>
                    </div>

                    <div className={style.inputcontainer}>
                        <label htmlFor="local">Email</label>
                        <input
                            type="text"
                            {...register("email", {
                                required: "Campo obrigatório",
                            })}
                        />
                        <p>{errors.email?.message}</p>
                    </div>

                    <div className={style.inputcontainer}>
                        <label htmlFor="firstDay">Senha</label>
                        <input
                            type="text"
                            {...register("password", {
                                required: "Campo obrigatório",
                            })}
                        />
                        <p>{errors.password?.message}</p>
                    </div>

                    </div>

                <input type="submit" value={isPending ? 'Cadastrando...' : 'Cadastrar usuário'} disabled={isPending}/>
            </form>
        </div>
    );
};

export default React.memo(CreateUser);
