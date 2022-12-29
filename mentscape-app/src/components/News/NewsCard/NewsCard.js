import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import '../../../css/Huynh.css'
export default function NewsCard({ props }) {
    return (
        <Card className='news-card' style={{ width: '18rem' }}>
            <Link to="/meditate" ><Card.Img variant="top" src="/img/news.webp" /></Link>
            <Card.Body>
                <Link to="/meditate"><h5>{props.title}</h5></Link>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}