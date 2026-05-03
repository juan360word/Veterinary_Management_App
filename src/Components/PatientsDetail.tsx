
// Imports

import type {Patient} from '../Types/Types.ts'

import PropsPa from './PropsPa.tsx'
import { UseStorePatients } from '../Store/Store.ts'
import { toast } from 'react-toastify'

type PatientProps = {
    patient: Patient
}

const PatientsDetail = ({patient}: PatientProps) => {

  const delate = UseStorePatients((state) => state.deletePatient)
   const {getPatiend} = UseStorePatients()

   const MessageClick = () => {
     delate(patient.id)
     toast('The patient was removed',{type:'warning'})
   }

  return (
    <>
    <div className='mx-5  my-10 px-5 py-5 bg-white  shadow-black rounded-2xl'>
    <PropsPa label='name' data={patient.name} />
    <PropsPa label='Caretaker' data={patient.caretaker} />
    <PropsPa label='Mail' data={patient.email} />
    <PropsPa label='Date' data={patient.date.toString()} />
    <PropsPa label='Symptoms' data={patient.symptoms} />

    <div className='flex justify-between mr-4 mx-auto '>

    <div className='   mt-10'>
        <button className='py-2 px-10 text-white font-bold  rounded-2xl bg-green-200 hover:bg-green-600 shadow-2xl  shadow-black hover:scale-115 cursor-pointer' onClick={() => getPatiend(patient.id)}>
         Edit
        </button>
     </div>

     <div className=' mt-10'>
       <button className='py-2 px-10 rounded-2xl text-white bg-red-200 hover:bg-red-600 shadow-2xl  shadow-black hover:scale-115  cursor-pointer' onClick={MessageClick}>
         Delete
        </button>
      </div>
    </div>
       
    </div>
    </>
  )
}

export default PatientsDetail