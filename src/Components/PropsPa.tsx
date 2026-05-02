
// Ya no se toca mas 

type PatientPropsItems = {
    label: string
    data: string
}



const PropsPa= ({label,data}:PatientPropsItems) => {
  return (
    <>
    <p className="text-2xl text-blue-600">{label}: {''}
        <span className="text-2xl text-blue-900">{data}</span>
    </p>
    </>
  )
}

export default PropsPa