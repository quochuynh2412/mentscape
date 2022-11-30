import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './approve.css'
const Approve_page = () => {
  const Info = [
    {image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/275426813_1793868064337766_1719138301835049824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zS_qjMkZhPMAX8r3JvK&_nc_oc=AQmUSaNNwWEi6j-TVuw4wrwyBu81K-SzuGUZsyfslPjrYcTmV7Bc8jmPY4tHkylBFlw&_nc_ht=scontent.fhan5-2.fna&oh=00_AfC5rDZYufRMFuO4zHWBsQO2gKXosddiJUXFLdLw3cwLAg&oe=638B7D1C", title: "Doan Huy", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialty: " Specialties: Anxiety, depression, marriage-problem", Link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    {image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/275426813_1793868064337766_1719138301835049824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zS_qjMkZhPMAX8r3JvK&_nc_oc=AQmUSaNNwWEi6j-TVuw4wrwyBu81K-SzuGUZsyfslPjrYcTmV7Bc8jmPY4tHkylBFlw&_nc_ht=scontent.fhan5-2.fna&oh=00_AfC5rDZYufRMFuO4zHWBsQO2gKXosddiJUXFLdLw3cwLAg&oe=638B7D1C", title: "Doan Huy", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialty: " Specialties: Anxiety, depression, marriage-problem", },
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
      <Card style={{ width: '18rem' }} className = "pro" >
      <Card.Img variant="top" src={card.image} />
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
      <Button variant="" className='cancel'>Cancel</Button>
      <Button variant="primary" className="approve" >Approve</Button>
      </Card.Body>
    </Card>
 
     
    );
 
 
 
   
  }
  return <div className= "grid">
      {Info.map(renderCard)}
  </div>
 
 
 
}
 
export default Approve_page;
 

