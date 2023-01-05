
import styles from './Banner.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default function Banner() {
    return (
        <section className='banner'>
            <Container fluid>
                <Row>
                    <Carousel
                        className={styles.carousel}
                        variant="dark">
                        <Carousel.Item>
                            <img src='/img/banner1-01.png'
                                className="d-block w-100" alt="banner1"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/img/banner2-01.png'
                                className="d-block w-100" alt="banner2"></img>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}