import Header from './Header.jsx'
import Parts from './Parts.jsx'
import Total from './Total.jsx'

const Course = ({course}) => {
    return(
        <div>
            <Header course={course.name}/>
            <Parts course={course}/>
            <Total course={course}/>
        </div>
    )
}

export default Course