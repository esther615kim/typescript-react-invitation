import { createContext } from 'react';
import { Invited } from './../components/data';

interface IContextState {
    guests: Invited[];
    setGuests: React.Dispatch<React.SetStateAction<Invited[]>>;
}

export const GuestsContext = createContext({} as IContextState);
// import in App
