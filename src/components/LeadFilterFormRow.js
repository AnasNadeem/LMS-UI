import { useState } from "react";

const LeadFilterFormRow = ({leadattribute, leadFullAttrObj, filterCombo, postFilterData}) => {
    const [slugFilter, setSlugFilter] = useState('');
    const [opFilter, setOpFilter] = useState('');
    const [valueFilter, setValueFilter] = useState('');

    return (
        <div className="row mt-2">
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
                    onInput={(e) => {
                        setValueFilter(e.target.value)
                        postFilterData(slugFilter, opFilter, valueFilter)
                    }}
                    />
                </div>
            </div>
        </div>
    )
}

export default LeadFilterFormRow;