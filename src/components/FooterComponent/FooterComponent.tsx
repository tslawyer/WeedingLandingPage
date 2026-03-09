import { useState } from "react";
import styles from "./FooterComponent.module.css";
import Reveal from "../Reveal/Reveal";

const FooterComponent = () => {
  const [open, isOpen] = useState<boolean>(false);

  const handleOpen = () => {
    isOpen(!open);
  };

  return (
    <Reveal>
      <footer className={styles.footer}>
        <h2 className={styles.title}>
          Хотите разделить с нами радость этого дня? Напишите нам в WhatsApp!
        </h2>
        <p>Как оставить зявку?</p>
        <div className={styles.faqItem}>
          <button className={styles.faqToggle} onClick={handleOpen}>
            {" "}
            <p>Раскрой меня</p>
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
            <p>Нажми на значок чтобы написать</p>
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
            <p>Нажми на значок чтобы написать</p>
            <a
              href="https://wa.me/4917620619301"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/what.png" alt="whatsapp" className={styles.icon} />
            </a>
          </li>
        </ul>
      </footer>
    </Reveal>
  );
};

export default FooterComponent;
