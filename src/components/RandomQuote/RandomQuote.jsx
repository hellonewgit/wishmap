import { useState, useEffect } from 'react';
import styles from './RandomQuote.module.css'; 

const RandomQuote = () => {
  const quotes = [
    "Только ты определяешь свою судьбу. Мечты становятся реальностью, когда ты веришь в них и действуешь.",
    "Будущее принадлежит тем, кто верит в красоту своей мечты.",
    "Все великие свершения начинаются с мечты. Следуй за своим сердцем и верь в себя.",
    "Твои желания — это не просто мечты. Это цели, которые ждут, когда ты сделаешь первый шаг.",
    "Ты создаёшь своё будущее своими мыслями, решениями и действиями. Никто не сможет это сделать за тебя.",
    "Путь к мечте начинается с веры в себя. Действуй смело, и успех придёт.",
    "Каждая большая цель начинается с маленького шага. Никогда не бойся мечтать и воплощать."
  ];

  const [quote, setQuote] = useState('');
  const [visible, setVisible] = useState(true); // Состояние для контроля видимости текста

  // Обновляем цитату каждые 10 секунд
  useEffect(() => {
    const changeQuote = () => {
      setVisible(false); // Сначала скрываем текст
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]); // Меняем цитату
        setVisible(true); // Снова показываем цитату
      }, 1000); 
    };

    changeQuote(); // Показать первую цитату при загрузке
    const interval = setInterval(changeQuote, 10000); // Обновлять цитату

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, []);

  return (
    <blockquote className={`${styles.blockquote} ${visible ? styles.visible : styles.hidden}`}>
      <p>{quote}</p> {/* Здесь отображаем цитату */}
    </blockquote>
  );
};

export default RandomQuote;
