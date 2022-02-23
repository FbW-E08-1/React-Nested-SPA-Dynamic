import React from 'react';

const Card = ({ item }) => {
  const { title, className } = item;

  return (
    <section className={className}>
      <h2>{title}</h2>
    </section>
  );
};

export default Card;
