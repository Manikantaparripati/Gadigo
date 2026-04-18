import React from 'react';
import { useParams } from 'react-router-dom';

const Rentals = () => {
  const { type } = useParams();
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold capitalize">Rent {type}</h1>
      <p className="text-text-muted mt-4">Discover our premium selection of {type} for your next journey.</p>
    </div>
  );
};

export default Rentals;
