import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Display(props) {
    let params = useParams()
    let content = props.articleNames ? props.articleNames[params.id] : 'error'
    console.log('this is  content',  content)

    return (
        <div>
            {/* <h2>{content.title}</h2>
            <p>{content.content}</p>
            <a href={content.url}>Read More Here!</a>
            <br />
            <hr />
            <div>
                <Link to='/'>Home</Link>
            </div> */}
        </div>
    )
}

export default Display;