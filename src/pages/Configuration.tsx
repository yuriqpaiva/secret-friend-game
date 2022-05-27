import React from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import ParticipantList from '../components/Form/ParticipantList';
import Footer from '../components/Layout/Footer';

const Configuration: React.FC = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <ParticipantList />
        <Footer />
      </section>
    </Card>
  );
};

export default Configuration;
