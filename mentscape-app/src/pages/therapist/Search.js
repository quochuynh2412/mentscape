import TherapistCard from '../../pages/therapist/Therapist_card.js';
import stockData from '../../data/therapist.json';
import "../../css/Vinh_css.css";
function Search() {
    return (
        <div class="container bgColor">
            <div class="row">
                <div class="col-2 border filterBg " >
                    <div class="row bgBlue ">
                        <h3 >Search filter</h3>
                    </div>
                    <div class>
                        <div class="row mt-3 ">
                            <h4 class="card-title mb-0 filter">Search by name</h4>
                        </div>
                        <div class="mt-3">
                            <input type="input"></input>
                        </div>
                        <div class="row mt-3">
                            <h4 class="card-title mb-0 filter">Search by date</h4>
                        </div>
                        <div class="mt-3">
                            <input type="date"></input>
                        </div>
                        <div class="mt-3 filter">
                            <h4>Specialized</h4>
                        </div>
                        <div>
                            <div class="row mt-3 filter">
                                <label class="col" for="Anxiety">Anxiety</label>
                                <input class="col" type="checkbox" name="Anxiety" id="Anxiety" value="Anxiety"></input>
                            </div>
                            <div class="row mt-3 filter">
                                <label class="col" for="Depression">Depression</label>
                                <input class="col" type="checkbox" name="Depression" id="Depression" value="Depression"></input>
                            </div>
                            <div class="row mt-3 filter">
                                <label class="col" for="Disorder">Disorder</label>
                                <input class="col" type="checkbox" name="Disorder" id="Disorder" value="Disorder"></input>
                            </div>
                            <div class="row mt-3 filter">
                                <label class="col" for="Schizophrenia">Schizophrenia</label>
                                <input class="col" type="checkbox" name="Schizophrenia" id="Schizophrenia" value="Schizophrenia"></input>
                            </div>
                            <div class="row mt-3 filter">
                                <label class="col" for="PTSD">PTSD</label>
                                <input class="col" type="checkbox" name="PTSD" id="PTSD" value="PTSD"></input>
                            </div>
                        </div>
                        <div class="mt-3">
                            <button type="button" class="btnSearch">Search</button>
                        </div>
                    </div>
                </div>
                <div class="col-10">
                    <div class="row border bgBlue sort ">
                        <select id="sort" name="sort" class="form-select ">
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
