import React from 'react';
import { useParticipantList } from '../../state/hooks/useParticipantList';

const ParticipantList: React.FC = () => {
  const participants: string[] = useParticipantList();

  return (
    <ul>
      {participants.map((participant) => {
        return (
          <li key={participant}>
            {participant}
          </li>
        );
      })}
    </ul>
  );
};

export default ParticipantList;
