import '../../css/Huynh.css';
import news from '../../components/News/news.json'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Banner from "../../components/Banner/Banner";
import { Header } from '../../components/Header';
export default function News() {
    return (
        <>
        <Header />
        <div className="overflow-hidden">
            <Banner></Banner>
            <section className="info">
                <div className="header">
                    <h1 className='fw-bolder'>News</h1>
                    <p className='fw-light'>Stay up to date</p>
                </div>
            </section>
            <section className='articles-preview'>
                <Row>
                    <Col>
                        {news.slice(0, 3).map((article, index) => (
                            <Row key={index}>
                                <div className="article-card d-flex rounded shadow">
                                    <div className="article-img flex-shrink-0">
                                        <img src="/img/news.webp" alt="..." />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p className='fw-bold'>{article.title}</p>
                                        <p className='fw-light'>{article.text}</p>
                                    </div>
                                </div>
                            </Row>
                        ))}
                    </Col>
                    <Col>
                        {news.slice(4, 6).map((article, index) => (
                            <Row key={index}>
                                <div className="article-card d-flex rounded shadow">
                                    <div className="article-img flex-shrink-0">
                                        <img src="/img/news.webp" alt="..." />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p className='fw-bold'>{article.title}</p>
                                        <p className='fw-light'>{article.text}</p>
                                    </div>
                                </div>
                            </Row>
                        ))}
                    </Col>
                </Row>
            </section>
        </div>
        </>
    )
}