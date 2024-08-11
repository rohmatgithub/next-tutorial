// components/ClientComponent.tsx
'use client';

import useStore from '../store/Store';

const ClientComponent = () => {
  const { value, setValue } = useStore();

  console.log('ClientComponent render');
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue('new value')}>Change Value</button>
    </div>
  );
};

export default ClientComponent;
