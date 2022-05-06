import React from 'react';
import DetailsCard from '../components/DetailsCard';
import Navbar from '../components/NavBar';

function SalesDetails() {
  const dataOrder = {
    status: 'Pendente',
    deliveryNumber: '12345',
    salesDate: '01/01/2020',
    order: [
      {
        id: 1,
        name: 'Produto 1',
        price: 'R$ 10,00',
        quantity: 1,
      },
      {
        id: 2,
        name: 'Produto 2',
        price: 'R$ 10,00',
        quantity: 1,
      },
    ],
  };

  return (
    <div>
      <Navbar pageName="Pedidos" />
      <DetailsCard data={ dataOrder } />
    </div>
  );
}

export default SalesDetails;
