const Total = ({course}) => {

    const totalEj = course.parts.reduce((totales, ejercicios) => totales + ejercicios.exercises, 0)
    return(
        <div>
            <p>Total: {totalEj}</p>
        </div>
    )
}

export default Total
