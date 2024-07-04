import styles from "./interests.module.css";

export default function Interests() {
  return (
    <div className={styles.interests} id="interests">
      <h3>Intereses</h3>
      <div>
        <ul className={styles.interestList}>
          <li>Productoras</li>
          <li>Creatividad</li>
          <li>IT</li>
          <li>Arte y diseño</li>
          <li>Producciones</li>
          <li>Eventos culturales</li>
          <li>Fotografía</li>
          <li>Cine</li>
          <li>Marketing y publicidad</li>
          <li>Idiomas</li>
          <li>...</li>
        </ul>
      </div>
    </div>
  );
}
