import React from 'react';
import Card from './Card';
import data from '../data/data';

const CardContainer = () => {
  const list = data.map((item) => <Card key={item.id} item={item} />);

  return <section className='card-container'>{list}</section>;
};

export default CardContainer;
