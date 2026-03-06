import { useState } from "react";
import styles from "./FooterComponent.module.css";

const FooterComponent = () => {
  const [open, isOpen] = useState<Boolean>(false);

  const handleOpen = () => {
    isOpen(!open);
  };

  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>
        Хотите попасть на свадьбу? Пишите нам в Whatsapp!
      </h2>
      <p>Как оставить зявку?</p>
      <div className={styles.faqItem}>
        <button className={styles.faqToggle} onClick={handleOpen}>
          {" "}
          <span className={`${styles.arrow} ${open ? styles.open : ""}`} />
        </button>
        {open && (
          <div className={styles.faqContent}>
            <p>Напишите одному из контактов в сообщении, указав:</p>
            <ul>
              <li>Имя</li>
              <li>Количество гостей с собой</li>
            </ul>
          </div>
        )}
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>Юрий</li>
        <li className={styles.item}>
          <a
            href="https://wa.me/4915566689575"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/what.png" alt="whatsapp" className={styles.icon} />
          </a>
        </li>
        <li className={styles.item}>Анна</li>
        <li className={styles.item}>
          <a
            href="https://wa.me/4915566689575"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/what.png" alt="whatsapp" className={styles.icon} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default FooterComponent;
