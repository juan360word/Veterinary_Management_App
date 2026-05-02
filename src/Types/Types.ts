
export type Patient ={
    id: string,
    name: string,
    caretaker:string,
    Mail:string,
    Date:Date,
    symptoms:string,
}

export type DropID = Omit<Patient,'id'>