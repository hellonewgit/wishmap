import React from 'react';
import DesireCard from '../DesireCard/DesireCard';
import styles from './DesireConstructor.module.css';

const DesireConstructor = ({ desires, myWishes, toggleWish }) => {
    // Фильтруем карточки, которые уже добавлены в "Мои желания"
    const availableDesires = desires.filter(desire => !myWishes.some(wish => wish.title === desire.title));

    return (
        <div>
            <h2>Выбирай что хочешь</h2>
            <div className={styles['desire-constructor']}>
                {availableDesires.map((desire, index) => (
                    <DesireCard
                        key={index}
                        title={desire.title}
                        imageUrl={desire.imageUrl}
                        isInMyWishes={false}
                        toggleWish={() => toggleWish(desire)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DesireConstructor;
