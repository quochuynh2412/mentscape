import TherapistCard from '../therapist/Therapist_card.js';
import stockData from '../../data/therapist.json';
import "../../css/Vinh_css.css";
function Search() {
    return (
        <div className="container bgColor">
            <div className="row">
                <div className="col-2 border filterBg " >
                    <div className="row bgBlue ">
                        <h3 >Search filter</h3>
                    </div>
                    <div class>
                        <div className="row mt-3 ">
                            <h4 className="card-title mb-0 filter">Search by name</h4>
                        </div>
                        <div className="mt-3">
                            <input type="input"></input>
                        </div>
                        <div className="row mt-3">
                            <h4 className="card-title mb-0 filter">Search by date</h4>
                        </div>
                        <div className="mt-3">
                            <input type="date"></input>
                        </div>
                        <div className="mt-3 filter">
                            <h4>Specialized</h4>
                        </div>
                        <div>
                            <div className="row mt-3 filter">
                                <label className="col" for="Anxiety">Anxiety</label>
                                <input className="col" type="checkbox" name="Anxiety" id="Anxiety" value="Anxiety"></input>
                            </div>
                            <div className="row mt-3 filter">
                                <label className="col" for="Depression">Depression</label>
                                <input className="col" type="checkbox" name="Depression" id="Depression" value="Depression"></input>
                            </div>
                            <div className="row mt-3 filter">
                                <label className="col" for="Disorder">Disorder</label>
                                <input className="col" type="checkbox" name="Disorder" id="Disorder" value="Disorder"></input>
                            </div>
                            <div className="row mt-3 filter">
                                <label className="col" for="Schizophrenia">Schizophrenia</label>
                                <input className="col" type="checkbox" name="Schizophrenia" id="Schizophrenia" value="Schizophrenia"></input>
                            </div>
                            <div className="row mt-3 filter">
                                <label className="col" for="PTSD">PTSD</label>
                                <input className="col" type="checkbox" name="PTSD" id="PTSD" value="PTSD"></input>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button type="button" className="btnSearch">Search</button>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="row border bgBlue sort ">
                        <select id="sort" name="sort" className="form-select ">
                            <option selected>Sort By</option>
                            <option value="name">Name</option>
                            <option value="rating">Rating</option>
                            <option value="pricelh">Price low to high</option>
                            <option value="pricehl">Price high to low</option>
                            <option value="distance">Distance</option>
                        </select>
                    </div>
                    {stockData.map(data => (
                        <TherapistCard id={data.id} avatar={data.avatar} first_name={data.first_name} last_name={data.last_name} location={data.location} specialized={data.specialized} education={data.education} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Search;
