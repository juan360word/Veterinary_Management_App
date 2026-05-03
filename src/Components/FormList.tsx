
//Imports

import PatientsDetail from "./PatientsDetail";
import { UseStorePatients} from "../Store/Store"


export const FormList = () => {
  const patients = UseStorePatients(state => state.patients)
 
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/2 md:h-screen overflow-y-scroll">
        
        {patients.length ? (
          <>
            <p className="text-center  text-3xl font-black ">If there are patients</p>
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
              <span className="font-bold text-purple-700">Add One</span>
            </p>
          </>
        )}
      </div>
    </>
  )
}
