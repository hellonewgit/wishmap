// src/components/DesireConstructor/DesireConstructor.jsx

import React from 'react';
import DesireCard from '../DesireCard/DesireCard';
import styles from './DesireConstructor.module.css';

const DesireConstructor = ({ desires = [], myWishes = [], toggleWish }) => {
    // Защищаемся от ошибки, если myWishes не является массивом
    const myWishesArray = Array.isArray(myWishes) ? myWishes : [];

    const myWishesIds = myWishesArray.map((wish) => wish.id);
    const availableDesires = desires.filter((desire) => !myWishesIds.includes(desire.id));

    return (
        <div>
            <h2>Выбирай что хочешь</h2>
            {availableDesires.length === 0 ? (
                <p className={styles['no-desires-message']}>Все желания добавлены!</p>
            ) : (
                <div className={styles['desire-constructor']}>
                    {availableDesires.map((desire) => (
                        <DesireCard
                            key={desire.id}
                            id={desire.id}
                            title={desire.title}
                            imageUrl={desire.imageUrl}
                            isInMyWishes={false}
                            toggleWish={() => toggleWish(desire)}
                            canEdit={false}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DesireConstructor;
