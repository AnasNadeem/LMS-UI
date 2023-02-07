import { useState } from "react";
import LeadFilterFormRow from "../components/LeadFilterFormRow";
// import { leadFilterApi } from "../api";

const LeadFilterForm = () => {
    const [filterData, setFilterData] = useState({});
    const [filterFormRow, setFilterFormRow] = useState([]);

    const leadattribute = JSON.parse(localStorage.getItem('leadattribute'));
    const constants = JSON.parse(localStorage.getItem('constants'));
    const filterCombo = constants.ATTR_OP_COMBO;

    let leadFullAttrObj = {};
    leadattribute.forEach((value, index) => {
        leadFullAttrObj[value.slug] = value;
    });

    const handleLeadFilter = async (e) => {
        e.preventDefault();
        // const filter = {};
        // filter[slugFilter] = [opFilter, valueFilter];
        // console.log(filter);
    }

    return (
        <form onSubmit={handleLeadFilter}>
            <div className="card card-body">
                <LeadFilterFormRow leadattribute={leadattribute} leadFullAttrObj={leadFullAttrObj} filterCombo={filterCombo}/>
                <div className="row">
                    <div className="col-4 offset-8">
                        <button className="btn btn-primary FormCardBodyGroupButton mt-2">Add Filter</button>
                    </div>
                </div>
                    <button className="btn btn-primary FormCardBodyGroupButton mt-2" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default LeadFilterForm;