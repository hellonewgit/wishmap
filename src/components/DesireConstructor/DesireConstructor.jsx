import React from 'react';
import DesireCard from '../DesireCard/DesireCard';
import styles from './DesireConstructor.module.css';

const DesireConstructor = ({ desires, myWishes, toggleWish }) => {
    return (
        <div>
            <h2>Выбирай что хочешь</h2>
            <div className={styles['desire-constructor']}>
                {desires.map((desire, index) => (
                    <DesireCard
                        key={index}
                        title={desire.title}
                        imageUrl={desire.imageUrl}
                        isInMyWishes={myWishes.some(wish => wish.title === desire.title)}
                        toggleWish={() => toggleWish(desire)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DesireConstructor;
