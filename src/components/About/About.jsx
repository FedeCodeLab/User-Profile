import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h3>Acerca de mí</h3>
      <p>
        ¡Hola! Soy María Paula Molina, Productora Creativa apasionada por
        transformar ideas en experiencias memorables. Con más de 10 años de
        experiencia en producciones audiovisuales, eventos en vivo y campañas
        publicitarias, me especializo en gestionar proyectos de manera integral
        y colaborativa. Mi enfoque detallista y mi capacidad para coordinar
        equipos diversos me permiten crear historias que inspiran y conectan.
        Fuera del trabajo, disfruto explorando la fotografía y la escritura
        creativa, siempre en busca de nuevas fuentes de inspiración.
      </p>
      <p>
        ¿Tienes un proyecto creativo? ¡Hablemos y hagamos algo increíble juntos!
      </p>
    </div>
  );
}
