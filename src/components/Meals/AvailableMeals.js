import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Biriyani',
    description: 'Spiced mix of Chicken and Rice',
    price: 150,
  },
  {
    id: 'm2',
    name: 'Tandoori Chicken',
    description: 'A South Asian dish of Chicken',
    price: 200,
  },
  {
    id: 'm3',
    name: 'Paneer Tikka',
    description: 'Chunks of Paneer marinated in spices and grilled',
    price: 190,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 250,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;