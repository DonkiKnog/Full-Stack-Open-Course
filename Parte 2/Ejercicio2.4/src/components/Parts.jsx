const Parts = ({course}) => {
    console.log('HOLAAAAAAAAAA', course)
    const partes = course.parts.map(parte => parte.name)
    const ejercicios  = course.parts.map((ejercicio, i) => {
        return(<p key={i}>{partes[i]} {ejercicio.exercises}</p>)
    })
    return(
        <div>
            {ejercicios}
        </div>
    )
}
export default Parts