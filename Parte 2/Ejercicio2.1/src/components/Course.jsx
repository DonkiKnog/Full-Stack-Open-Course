import Header from './Header.jsx'
import Parts from './Parts.jsx'

const Course = ({course}) => {
    return(
        <div>
            <Header course={course.name}/>
            <Parts course={course}/>
        </div>
    )
}

export default Course