
//Imports

import { useForm } from "react-hook-form"
import { Error } from "./Error"
import type { DropID } from "../Types/Types"



export const Form = () => {

    const {register,handleSubmit,formState: {errors}} = useForm<DropID>()

    const RegisterPatients = (Data: DropID) => {
        
    }

  return (

    <>
     <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Patient Tracking</h2>

        <p className="text-lg mt-5 text-center mb-10">
        Add Patients and Manage Themy {''}
            <span className="text-purple-700 font-bold">Administralos</span>
        </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            noValidate
            onSubmit={handleSubmit(RegisterPatients)}
        >
              <div className="mb-5">
                  <label htmlFor="name" className="text-sm uppercase font-bold">
                  Patient 
                  </label>
                  <input  
                      id="name"
                      className="w-full p-3  border border-gray-100"  
                      type="text" 
                      placeholder="Patient Name"
                      {...register('name',{
                        required: 'Patient name is required'
                      })}
                  />
                  {errors.name && (
                     <Error>{errors.name?.message.toString()}</Error>
                  )}
                 
                 
                  
              </div>

              <div className="mb-5">
                <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                     Owner 
                </label>
                <input  
                    id="caretaker"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Owner Name"
                    {...register('caretaker',{
                        required: 'Owner name is required'
                      })}
                />
                 {errors.caretaker && (
                     <Error>{errors.caretaker?.message.toString()}</Error>
                  )}
              </div>

            <div className="mb-5">
              <label htmlFor="email" className="text-sm uppercase font-bold">
                  Mail
              </label>
              <input  
                  id="Mail"
                  className="w-full p-3  border border-gray-100"  
                  type="Mail" 
                  placeholder="You Mail" 
                  {...register("Mail", {
                    required: "Mail requiered",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email No Válido'
                    }
                  })} 
              />
              {errors.Mail && (
                     <Error>{errors.Mail?.message.toString()}</Error>
                  )}
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm uppercase font-bold">
                    Date
                </label>
                <input  
                    id="date"
                    className="w-full p-3  border border-gray-100"  
                    type="date" 
                    {...register('Date',{
                        required: 'Date is required'
                      })}
                />
                 {errors.Date && (
                     <Error>{errors.Date?.message.toString()}</Error>
                  )}
            </div>
            
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                Symptoms 
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-3  border border-gray-100"  
                    placeholder="Symptoms of the Patient" 
                ></textarea>
            </div>

            <input
                type="submit"
                className="bg-purple-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
                value='Save Patient '
            />
        </form> 
    </div>
    </>
  )
}
