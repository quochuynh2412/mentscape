import { Link } from "react-router-dom";
import error_pic from "../../assets/img/404.webp";
import { Header } from "../../components/Header";

export const NotFound = () => {
  return (
    <>
    <Header />
    <div className="container text-center">
        <img src={error_pic} className="error_pic" alt="404"/>
        <h2 className="title fw-bold">Oh no...</h2>
        <p>We cannot find the page you are looking for! Back to <Link to="/">Home</Link>?</p>
    </div>
      </>
  )
}
