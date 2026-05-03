
//Imports

import { useForm } from "react-hook-form"
import { Error } from "./Error"
import type { DropID } from "../Types/Types"
import { UseStorePatients } from "../Store/Store"
import { useEffect } from "react"
import {toast} from 'react-toastify'


export const Form = () => {

    const {addPatient} = UseStorePatients()
    const {patients} = UseStorePatients()
    const {patiendEdit} = UseStorePatients()
    const {update} = UseStorePatients()
   
    const {register,handleSubmit,setValue,formState: {errors},reset} = useForm<DropID>()

    useEffect(() =>{
        if(patiendEdit){
            const edit = patients.filter(item => item.id === patiendEdit)[0]
            setValue('name',edit.name)
            setValue('caretaker',edit.caretaker)
            setValue('email',edit.email)
            setValue('date',edit.date)
            setValue('symptoms',edit.symptoms)
        }
    },[patiendEdit])

    const RegisterPatients = (Data: DropID) => {

        if(patiendEdit){
            update(Data)
            toast('The patient`s status was updated', {type:'success'} )
        }else{
            addPatient({
            ...Data,
            date: new Date(Data.date) // 👈 convierte string a Date
        })
        toast('The patient was added correctly')
        }

        reset()
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
                     <Error>{errors.name?.message?.toString()}</Error>
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
                     <Error>{errors.caretaker?.message?.toString()}</Error>
                  )}
              </div>

            <div className="mb-5">
              <label htmlFor="email" className="text-sm uppercase font-bold">
                  Mail
              </label>
              <input  
                  id="email"
                  className="w-full p-3  border border-gray-100"  
                  type="email" 
                  placeholder="You Mail" 
                  {...register("email", {
                    required: "email requiered",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email not value'
                    }
                  })} 
              />
              {errors.email && (
                     <Error>{errors.email?.message?.toString()}</Error>
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
                    {...register('date',{
                        required: 'Date is required'
                      })}
                />
                 {errors.date && (
                     <Error>{errors.date?.message?.toString()}</Error>
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
                    {...register('symptoms', {
                        required: 'Symptoms are required'
                    })}
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
