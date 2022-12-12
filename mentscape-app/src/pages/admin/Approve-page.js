import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { Header } from '../../components/Header';
const Approve_page = () => {
  const Info = [
    {image: "/img/download (2).jpeg", title: "Doan Huy", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialty: " Specialties: Anxiety, depression, marriage-problem", Link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    {image: "/img/doctor.jpeg", title: "Doan Huy", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialty: " Specialties: Anxiety, depression, marriage-problem", },
    {image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/275426813_1793868064337766_1719138301835049824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zS_qjMkZhPMAX8r3JvK&_nc_oc=AQmUSaNNwWEi6j-TVuw4wrwyBu81K-SzuGUZsyfslPjrYcTmV7Bc8jmPY4tHkylBFlw&_nc_ht=scontent.fhan5-2.fna&oh=00_AfC5rDZYufRMFuO4zHWBsQO2gKXosddiJUXFLdLw3cwLAg&oe=638B7D1C", title: "Doan Huy", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialty: " Specialties: Anxiety, depression, marriage-problem", },
    {image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/275426813_1793868064337766_1719138301835049824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zS_qjMkZhPMAX8r3JvK&_nc_oc=AQmUSaNNwWEi6j-TVuw4wrwyBu81K-SzuGUZsyfslPjrYcTmV7Bc8jmPY4tHkylBFlw&_nc_ht=scontent.fhan5-2.fna&oh=00_AfC5rDZYufRMFuO4zHWBsQO2gKXosddiJUXFLdLw3cwLAg&oe=638B7D1C", title: "Doan Huy", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialty: " Specialties: Anxiety, depression, marriage-problem", },
    {image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/275426813_1793868064337766_1719138301835049824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zS_qjMkZhPMAX8r3JvK&_nc_oc=AQmUSaNNwWEi6j-TVuw4wrwyBu81K-SzuGUZsyfslPjrYcTmV7Bc8jmPY4tHkylBFlw&_nc_ht=scontent.fhan5-2.fna&oh=00_AfC5rDZYufRMFuO4zHWBsQO2gKXosddiJUXFLdLw3cwLAg&oe=638B7D1C", title: "Doan Huy", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialty: " Specialties: Anxiety, depression, marriage-problem", },
    {image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/275426813_1793868064337766_1719138301835049824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zS_qjMkZhPMAX8r3JvK&_nc_oc=AQmUSaNNwWEi6j-TVuw4wrwyBu81K-SzuGUZsyfslPjrYcTmV7Bc8jmPY4tHkylBFlw&_nc_ht=scontent.fhan5-2.fna&oh=00_AfC5rDZYufRMFuO4zHWBsQO2gKXosddiJUXFLdLw3cwLAg&oe=638B7D1C", title: "Doan Huy", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialty: " Specialties: Anxiety, depression, marriage-problem", },
    {image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/275426813_1793868064337766_1719138301835049824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zS_qjMkZhPMAX8r3JvK&_nc_oc=AQmUSaNNwWEi6j-TVuw4wrwyBu81K-SzuGUZsyfslPjrYcTmV7Bc8jmPY4tHkylBFlw&_nc_ht=scontent.fhan5-2.fna&oh=00_AfC5rDZYufRMFuO4zHWBsQO2gKXosddiJUXFLdLw3cwLAg&oe=638B7D1C", title: "Doan Huy", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialty: " Specialties: Anxiety, depression, marriage-problem", },
    {image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/275426813_1793868064337766_1719138301835049824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zS_qjMkZhPMAX8r3JvK&_nc_oc=AQmUSaNNwWEi6j-TVuw4wrwyBu81K-SzuGUZsyfslPjrYcTmV7Bc8jmPY4tHkylBFlw&_nc_ht=scontent.fhan5-2.fna&oh=00_AfC5rDZYufRMFuO4zHWBsQO2gKXosddiJUXFLdLw3cwLAg&oe=638B7D1C", title: "Doan Huy", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialty: " Specialties: Anxiety, depression, marriage-problem", },
    {image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/275426813_1793868064337766_1719138301835049824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zS_qjMkZhPMAX8r3JvK&_nc_oc=AQmUSaNNwWEi6j-TVuw4wrwyBu81K-SzuGUZsyfslPjrYcTmV7Bc8jmPY4tHkylBFlw&_nc_ht=scontent.fhan5-2.fna&oh=00_AfC5rDZYufRMFuO4zHWBsQO2gKXosddiJUXFLdLw3cwLAg&oe=638B7D1C", title: "Doan Huy", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialty: " Specialties: Anxiety, depression, marriage-problem", },
 
 
  ];
 
  const renderCard = (card, index) => {
    return (
      <Col md={6} lg={4} className="gx-5 gy-3" >
      <Card>
      <Card.Img style={{height: "300px", objectFit: "cover"}} variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.overview}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{card.specialty}</ListGroup.Item>
        <ListGroup.Item><Card.Link href={card.Link}>My CV</Card.Link></ListGroup.Item>
       
      </ListGroup>
      <Card.Body>
      <Button variant="danger" className="me-3">Cancel</Button>
      <Button variant="primary">Approve</Button>
      </Card.Body>
    </Card>
      </Col>
 
     
    );
 
 
 
   
  }
  return (
    <>
      <Header />
      <div className= "content">
        <div className="container">
          <Row>
              {Info.map(renderCard)}
          </Row>
          </div>
      </div>
    </>
  )
 
 
 
}
 
export default Approve_page;
 

