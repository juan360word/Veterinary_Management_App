
//Imports

import PatientsDetail from "./PatientsDetail";
import { UseStorePatients} from "../Store/Store"

export const FormList = () => {
  
  const patients = UseStorePatients(state => state.patients)
 
  return (
   
    <>
      <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
        
      {patients.length ? (
    <>
       <p className="text-center text-2xl font-bold">If there are patients</p>
        {patients.map((item) => (
      <PatientsDetail
        key={item.id}
        patient={item}
      />
       ))}
    </>
    ) : (
    <>
      <h1 className="font-black text-2xl text-center">No Patients</h1>
      <p className="text-center mt-5 mb-10 text-xl">
         First add a patient {''}
      <span className="fond-bold text-purple-700">Add One</span>
      </p>
    </>
)}
        
      </div>
    </>
  )
}
