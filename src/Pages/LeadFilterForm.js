import { useState } from "react";
import LeadFilterFormRow from "../components/LeadFilterFormRow";
// import { leadFilterApi } from "../api";

const LeadFilterForm = ({leadattribute, filterCombo, leadFullAttrObj}) => {
    const [filterData, setFilterData] = useState({});
    const [filterFormRow, setFilterFormRow] = useState([0]);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleLeadFilter = async () => {
        // e.preventDefault();
        setIsSubmit(true);
        console.log(filterData);
        // const response = await leadFilterApi(filterData);
        // console.log(response.data);
    }

    const postFilterData = (slug, op, value) => {
        const filter = {};
        console.log(slug, op, value);
        filter[slug] = [op, value];
        setFilterData({...filterData, ...filter});
    }

    const childFormRow = (index) => (
            <LeadFilterFormRow key={index} 
                leadattribute={leadattribute} 
                leadFullAttrObj={leadFullAttrObj}
                filterCombo={filterCombo} 
                postFilterData={postFilterData}
                isSubmit={isSubmit}
            />)

    return (
        <div className="card card-body">
            {filterFormRow.length>0 && filterFormRow.map((formRow) => childFormRow(formRow))}
            <div className="row">
                <div className="col-4 offset-8">
                    <button
                        className="btn btn-primary FormCardBodyGroupButton mt-2"
                        onClick={() => setFilterFormRow([...filterFormRow, filterFormRow.length])}
                    >
                        Add Filter
                    </button>
                </div>
            </div>
                <button className="btn btn-primary FormCardBodyGroupButton mt-2" onClick={handleLeadFilter} type="submit">Submit</button>
        </div>
    )
}

export default LeadFilterForm;