
// Ya no se toca mas 

type PatientPropsItems = {
    label: string
    data: string
}



const PropsPa= ({label,data}:PatientPropsItems) => {
  return (
    <>
    <p className="text-2xl text-purple-700">{label}: {''}
        <span className="text-2xl text-black">{data}</span>
    </p>
    </>
  )
}

export default PropsPa