import React from 'react';
import DesireCard from '../DesireCard/DesireCard';
import styles from './MyWishes.module.css';

const MyWishes = ({ wishes, toggleWish }) => {
    if (wishes.length === 0) {
        return null;
    }

    return (
        <div>
            <h2>Мои желания</h2>
            <div className={styles['my-wishes']}>
                {wishes.map((wish, index) => (
                    <DesireCard
                        key={index}
                        title={wish.title}
                        imageUrl={wish.imageUrl}
                        isInMyWishes={true}
                        toggleWish={() => toggleWish(wish)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyWishes;
