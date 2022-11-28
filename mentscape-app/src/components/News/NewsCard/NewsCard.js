import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom';
import '../../../index.css'
export default function NewsCard({props}) {
    return(
    <Card className='news-card' style={{ width: '18rem' }}>
        <Link to="/news" ><Card.Img variant="top" src="/img/placeholders/rectangle.png" /></Link>
        <Card.Body>
            <Link to="/news"><Card.Title>{props.title}</Card.Title></Link>
            <Card.Text>
                {props.text}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}