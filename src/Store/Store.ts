
// Imports
import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import type { Patient } from '../Types/Types'  


interface StatePatients {
    patients: Patient[]
    addPatient: (data: Omit<Patient, 'id'>) => void
    deletePatient: (id: string) => void  
    patiendEdit: Patient['id'] 
    getPatiend: (id:string) => void
    update: (data: Omit<Patient, 'id'>) => void
}


export const UseStorePatients = create<StatePatients>((set) => ({
    patients: [],  
    patiendEdit:'',
    
    
    addPatient: (data) => {
        const newPatient: Patient = {
            id: uuidv4(),  // ✅ UUID
            ...data
        }
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    },
    
    
    deletePatient: (id) => {
        set((state) => ({
            patients: state.patients.filter(patient => patient.id !== id)
        }))
    },
    getPatiend:(id) => {
        set(() => ({
            patiendEdit: id
        }))
    },
   
    update:(id) => {
        set((state) => ({
            patients: state.patients.map((item) => item.id === state.patiendEdit ?
            {id: state.patiendEdit, ...id} : item ), patiendEdit:''
        }))
    }
}))