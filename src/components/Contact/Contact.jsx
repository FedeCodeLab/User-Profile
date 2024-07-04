"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import styles from "./contact.module.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("¡Mensaje enviado con éxito!");
    reset();
  };

  return (
    <section className={`${styles.GridContact} container`} id="contact">
      <div className={styles.imagen}>
        <Image
          src="/concept.png"
          alt="Foto de perfil"
          width={350}
          height={350}
          className={styles.image}
        />
      </div>
      <div className={styles.formulario}>
        <h3>Contacto</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nombre"
            {...register("nombre", {
              required: true,
              pattern: /^[A-Za-zÁ-ÿ\u00f1\u00d1\s]+$/,
            })}
          />
          {errors.nombre?.type === "required" && (
            <span className={styles.error}>Este campo es requerido</span>
          )}
          {errors.nombre?.type === "pattern" && (
            <span className={styles.error}>
              El nombre no puede contener números ni caracteres especiales
            </span>
          )}

          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email?.type === "required" && (
            <span className={styles.error}>Este campo es requerido</span>
          )}
          {errors.email?.type === "pattern" && (
            <span className={styles.error}>
              Ingrese un correo electrónico válido
            </span>
          )}

          <input
            type="text"
            placeholder="Asunto"
            {...register("asunto", { required: true })}
          />
          {errors.asunto?.type === "required" && (
            <span className={styles.error}>Este campo es requerido</span>
          )}

          <textarea
            placeholder="Mensaje (mínimo 100 caracteres)"
            {...register("mensaje", {
              required: true,
              minLength: 100,
            })}
          />
          {errors.mensaje?.type === "required" && (
            <span className={styles.error}>Este campo es requerido</span>
          )}
          {errors.mensaje?.type === "minLength" && (
            <span className={styles.error}>
              El mensaje debe tener al menos 100 caracteres
            </span>
          )}

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
