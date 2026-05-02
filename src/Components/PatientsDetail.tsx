
// Imports

import type {Patient} from '../Types/Types.ts'
import PropsPa from './PropsPa.tsx'
import { UseStorePatients } from '../Store/Store.ts'

type PatientProps = {
    patient: Patient
}

const PatientsDetail = ({patient}: PatientProps) => {

  const delate = UseStorePatients((state) => state.deletePatient)
   const {getPatiend} = UseStorePatients()

  return (
    <>
    <div className='mx-5 my-10 px-5 py-5 bg-white shadow-md rounded-2xl'>
    <PropsPa label='id' data={patient.id} />
    <PropsPa label='name' data={patient.name} />
    <PropsPa label='Caretaker' data={patient.caretaker} />
    <PropsPa label='Mail' data={patient.email} />
    <PropsPa label='Date' data={patient.date.toString()} />
    <PropsPa label='Symptoms' data={patient.symptoms} />

    <div className='flex flex-col md:flex-row  mt-10'>
      <button className='py-2 px-10 rounded-lg bg-green-600 cursor-pointer' onClick={() => getPatiend(patient.id)}>
        Edit
      </button>
    </div>

    <div className='flex justify-between gap-3 mt-10'>
      <button className='py-2 px-10 rounded-lg bg-red-600  cursor-pointer' onClick={() => delate(patient.id)}>
        Delate
      </button>
    </div>

       
    </div>
    </>
  )
}

export default PatientsDetail