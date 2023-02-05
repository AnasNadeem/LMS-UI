import { useState } from "react";
// import { leadFilterApi } from "../api";

const LeadFilterForm = () => {
    const [leadAttrData, setLeadAttrData] = useState({});
    const [filterData, setFilterData] = useState({});

    const leadattribute = JSON.parse(localStorage.getItem('leadattribute'));
    const constants = JSON.parse(localStorage.getItem('constants'));
    const filterCombo = constants.ATTR_OP_COMBO;

    let leadFullAttrObj = {};
    leadattribute.forEach((value, index) => {
        leadFullAttrObj[value.slug] = value;
    });
    setLeadAttrData(leadFullAttrObj);

    const handleLeadFilter = async (e) => {
        e.preventDefault();
        console.log(filterData);
    }

    return (
        <form onSubmit={handleLeadFilter}>
            <div className="card card-body">
                <div className="row">
                    <div className="col-4">
                        <div className="d-flex FormCardBodyGroupInput rounded">
                        <select
                        className="form-select border-0"
                        // value={}
                        onInput={(e) => {
                            const formValueData = {...filterData}
                            formValueData[e.target.value] = [];
                            setFilterData(formValueData);
                        }}
                        >
                            {leadattribute.map((leadAttr) => (
                                <option key={leadAttr.slug} value={leadAttr.slug}>{leadAttr.slug}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex FormCardBodyGroupInput rounded">
                        <select
                        className="form-select border-0"
                        >
                            {filterData ?
                                filterCombo.leadAttrData[filterData[0].key].boolean.map((filter) => (
                                    <option key={filter} value={filter}>{filter}</option>
                                ))
                            : <option value="0">select the attribute</option>
                            }
                        </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex FormCardBodyGroupInput rounded">
                        <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary FormCardBodyGroupButton mt-2" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default LeadFilterForm;