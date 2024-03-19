import { createContext } from 'react';

interface InitialState {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const INITIAL_STATE = {
  userName: '',
} as InitialState;

const context = createContext(INITIAL_STATE);

export default context;
