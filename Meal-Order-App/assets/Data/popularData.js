const popularData = [
    {
      id: '1',
      image: require('../ui-images/pizza1.png'),
      title: 'Primavera Pizza',
      weight: '540 gr',
      rating: '5.0',
      price: 3.99,
      sizeName: 'Medium',
      sizeNumber: 14,
      crust: 'Thin Crust',
      deliveryTime: 30,
      ingredients: [
        {
          id: '1',
          name: 'ham',
          image: require('../ui-images/ham.png'),
        },
        {
          id: '2',
          name: 'tomato',
          image: require('../ui-images/tomato.png'),
        },
        {
          id: '3',
          name: 'cheese',
          image: require('../ui-images/cheese.png'),
        },
        {
          id: '4',
          name: 'garlic',
          image: require('../ui-images/garlic.png'),
        },
      ],
    },
    {
      id: '2',
      image: require('../ui-images/pizza2.png'),
      title: 'Vegetarian Pizza',
      weight: '450 gr',
      rating: '4.0',
      price: 5.99,
      sizeName: 'Small',
      sizeNumber: 10,
      crust: 'Thick Crust',
      deliveryTime: 40,
      ingredients: [
        {
          id: '1',
          name: 'cheese',
          image: require('../ui-images/cheese.png'),
        },
        {
          id: '2',
          name: 'garlic',
          image: require('../ui-images/garlic.png'),
        },
      ],
    },
    {
      id: '3',
      image: require('../ui-images/pizza3.png'),
      title: 'Pepperoni Pizza',
      weight: '700 gr',
      rating: '5.0',
      price: 9.99,
      sizeName: 'Large',
      sizeNumber: 18,
      crust: 'Thin Crust',
      deliveryTime: 20,
      ingredients: [
        {
          id: '1',
          name: 'tomato',
          image: require('../ui-images/tomato.png'),
        },
        {
          id: '2',
          name: 'cheese',
          image: require('../ui-images/cheese.png'),
        },
      ],
    },
  ];
  
  export default popularData;