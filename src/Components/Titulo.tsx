
// Imports

import { Form } from "./Form"
import { FormList } from "./FormList"


export const Titulo = () => {
  return (
    
    <>
        <div className=" container mt-20 mx-auto">
            <h1 className=" text-4xl font-black text-center md:w-2/3 md:mx-auto">
            Patient Tracking - {''}
                <span className=" text-purple-700">Animal Health</span>
            </h1>
            <div className=" mt-12 flex">
            <Form/>
            <FormList/>
            </div>
        </div>
    </>
  )
}
