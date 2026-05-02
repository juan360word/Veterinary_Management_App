
// Imports

import type {Patient} from '../Types/Types.ts'
import PropsPa from './PropsPa.tsx'
type PatientProps = {
    patient: Patient
}

const PatientsDetail = ({patient}: PatientProps) => {
  return (
    <>
    <div className='mx-5 my-10 px-5 py-5 bg-white shadow-md rounded-2xl'>
    <PropsPa label='id' data={patient.id} />
  <PropsPa label='name' data={patient.name} />
  <PropsPa label='Caretaker' data={patient.caretaker} />
  <PropsPa label='Mail' data={patient.Mail} />
  <PropsPa label='Date' data={patient.Date.toString()} />
  <PropsPa label='Symptoms' data={patient.symptoms} />
       
    </div>
    </>
  )
}

export default PatientsDetail