import { PropsWithChildren, useMemo, useState } from 'react';
import context from './context';

export default function Provider({ children }: PropsWithChildren) {
  const [userName, setUserName] = useState('');

  const foo = useMemo(() => ({ userName, setUserName }), [userName]);
  return (
    <context.Provider value={foo}>
      {children}
    </context.Provider>
  );
}
