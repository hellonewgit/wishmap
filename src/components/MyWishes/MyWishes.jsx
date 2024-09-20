// src/components/MyWishes/MyWishes.jsx

import React from 'react';
import DesireCard from '../DesireCard/DesireCard';
import styles from './MyWishes.module.css';

const MyWishes = ({ wishes = [], toggleWish, updateWishTitle }) => {
    // Если массив желаний пуст, показываем сообщение
    if (!Array.isArray(wishes) || wishes.length === 0) {
        return <p>У вас пока нет желаний.</p>;
    }

    return (
        <div>
            <h2>Мои желания</h2>
            <div className={styles['my-wishes']}>
                {wishes.map((wish) => (
                    <DesireCard
                        key={wish.id}
                        id={wish.id}
                        title={wish.title}
                        imageUrl={wish.imageUrl}
                        isInMyWishes={true}
                        toggleWish={() => toggleWish(wish)}
                        updateTitle={(newTitle) => updateWishTitle(wish.id, newTitle)}
                        canEdit={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyWishes;
