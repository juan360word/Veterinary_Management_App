
export type Patient ={
    id: String,
    name: String,
    caretaker:String,
    Mail:String,
    Date:Date,
    symptoms:String,
}

export type DropID = Omit<Patient,'id'>