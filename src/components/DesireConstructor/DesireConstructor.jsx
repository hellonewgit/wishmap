// DesireConstructor.jsx
import DesireCard from '../DesireCard/DesireCard';
import styles from './DesireConstructor.module.css';

const DesireConstructor = ({ desires, myWishes, toggleWish }) => {
    const myWishesIds = myWishes.map((wish) => wish.id);
    const availableDesires = desires.filter((desire) => !myWishesIds.includes(desire.id));

    return (
        <div>
            <h2>Выбирай что хочешь</h2>
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
        </div>
    );
};

export default DesireConstructor;
