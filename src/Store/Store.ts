
// Imports
import {create} from 'zustand'; 
import type{ Patient, DropID} from '../Types/Types';
import { v4 as uuidv4 } from 'uuid';
type StatePatients = {
    patients: Patient[],
    addPatient: (Data: DropID) => void
}

const createPatient = (patient: DropID) : Patient => {
    return {...patient,id: uuidv4()}
}

 export const UseStorePatients = create<StatePatients>((set) => ({ // Set: para actualizar el estado, get: para obtener el estado
    patients: [],
    addPatient: (Data) => {
        console.log('GUARDANDOOO..????')
        const NewID = createPatient(Data)
        set((state) => ({
            patients: [...state.patients, NewID]
        }))
    }
 }))