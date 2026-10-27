import f1 from '../components/pages/images/f1.jpg'
import f2 from '../components/pages/images/f2.jpg'
import f3 from '../components/pages/images/f3.jpg'
import f4 from '../components/pages/images/f4.jpg'

// Sample content until the restaurant API is wired up.
export const restaurants = [
  {
    id: 'sample-bistro',
    name: 'Sample Bistro',
    cuisine: 'Modern American',
    city: 'Your City',
    image: f1,
    dishes: [
      { name: 'Grilled Salmon', rating: 4.7 },
      { name: 'Truffle Fries', rating: 4.5 },
      { name: 'Lemon Tart', rating: 4.2 },
    ],
  },
  {
    id: 'sample-trattoria',
    name: 'Sample Trattoria',
    cuisine: 'Italian',
    city: 'Your City',
    image: f2,
    dishes: [
      { name: 'Margherita Pizza', rating: 4.8 },
      { name: 'Cacio e Pepe', rating: 4.6 },
      { name: 'Tiramisu', rating: 4.4 },
    ],
  },
  {
    id: 'sample-grill',
    name: 'Sample Grill House',
    cuisine: 'Steakhouse',
    city: 'Your City',
    image: f3,
    dishes: [
      { name: 'Ribeye Steak', rating: 4.6 },
      { name: 'Caesar Salad', rating: 4.0 },
      { name: 'Creamed Spinach', rating: 4.1 },
    ],
  },
  {
    id: 'sample-cafe',
    name: 'Sample Cafe',
    cuisine: 'Brunch',
    city: 'Your City',
    image: f4,
    dishes: [
      { name: 'Avocado Toast', rating: 4.3 },
      { name: 'Buttermilk Pancakes', rating: 4.7 },
      { name: 'Flat White', rating: 4.5 },
    ],
  },
]

export const findRestaurant = (id) => restaurants.find((r) => r.id === id)
