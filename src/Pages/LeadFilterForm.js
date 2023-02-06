import { useState } from "react";
// import { leadFilterApi } from "../api";

const LeadFilterForm = () => {
    const [filterData, setFilterData] = useState({});
    const [slugFilter, setSlugFilter] = useState('');
    const [opFilter, setOpFilter] = useState('');
    const [valueFilter, setValueFilter] = useState('');

    const leadattribute = JSON.parse(localStorage.getItem('leadattribute'));
    const constants = JSON.parse(localStorage.getItem('constants'));
    const filterCombo = constants.ATTR_OP_COMBO;

    let leadFullAttrObj = {};
    leadattribute.forEach((value, index) => {
        leadFullAttrObj[value.slug] = value;
    });

    const handleLeadFilter = async (e) => {
        e.preventDefault();
        const filter = {};
        filter[slugFilter] = [opFilter, valueFilter];
        console.log(filter);
    }

    return (
        <form onSubmit={handleLeadFilter}>
            <div className="card card-body">
                <div className="row">
                    <div className="col-4">
                        <div className="d-flex FormCardBodyGroupInput rounded">
                        <select
                        className="form-select border-0"
                        value={slugFilter}
                        onChange={(e) => setSlugFilter(e.target.value)}
                        >
                            {leadattribute.map((leadAttr) => (
                                <option key={leadAttr.slug} value={leadAttr.slug}>{leadAttr.name}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex FormCardBodyGroupInput rounded">
                        <select
                        className="form-select border-0"
                        value={opFilter}
                        onChange={(e) => setOpFilter(e.target.value)}
                        >
                            {slugFilter ?
                                filterCombo[leadFullAttrObj[slugFilter].attribute_type].map((filter) => (
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
                            value={valueFilter}
                            onInput={(e) => setValueFilter(e.target.value)}
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