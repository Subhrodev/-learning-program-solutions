import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from './trainerMock';

function TrainerDetail() {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.trainerId === parseInt(id));

  if (!trainer) {
    return <h2>Trainer not found</h2>;
  }

  return (
    <div>
      <h2>{trainers.name}</h2>
      <p><b>Email:</b> {trainer.email}</p>
      <p><b>Phone:</b> {trainer.phone}</p>
      <p><b>Technology:</b> {trainer.technology}</p>
      <p><b>Skills:</b> {trainer.skills.join(', ')}</p>
    </div>
  );
}

export default TrainerDetail;
