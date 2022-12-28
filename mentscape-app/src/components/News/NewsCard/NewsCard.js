import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import '../../../css/Huynh.css'
export default function NewsCard({ props }) {
    return (
        <Card className='news-card' style={{ width: '18rem' }}>
            <Link to="/meditate" ><Card.Img variant="top" src="/img/placeholders/rectangle.png" /></Link>
            <Card.Body>
                <Link to="/meditate"><Card.Title>{props.title}</Card.Title></Link>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}