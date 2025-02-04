import Header from './Header.jsx'
import Parts from './Parts.jsx'
import Total from './Total.jsx'

const Course = ({course}) => {
    return(
        course.map((curso) => {
            return(
            <div key={curso.id}>
                <Header course={curso}/>
                <Parts course={curso}/>
                <Total course={curso}/>
            </div>
            )
        })
        
    )
}

export default Course