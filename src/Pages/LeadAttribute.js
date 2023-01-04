import Sidebar from "../components/Sidebar";

const LeadAttribute = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-2">
                <Sidebar />
            </div>
            <div className="col-10">
                <div className="main">
                    <div className="container-fluid">
                      <h2 className="mainTitle">
                        Lead Structure
                      </h2>
                      <div className="topBtn">
                        <button className="btn createBtn" data-bs-toggle="collapse" data-bs-target="#createLeadStructure" aria-expanded="false" aria-controls="createLeadStructure">
                          Create New
                        </button>
                        <input type="text" placeholder="Search" />
                      </div>

                      <div className="collapse" id="createLeadStructure">
                        <div className="card card-body leadFormCard">
                          <div className="row">
                            <div className="col-3">
                              <div className="FormCardBodyGroup">
                                <label htmlFor="name" className="form-label FormCardBodyGroupTitle">Name</label>
                                <div className="d-flex FormCardBodyGroupInput rounded">
                                  <input
                                  type="text"
                                  className="form-control border-0"
                                  id="name"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="FormCardBodyGroup">
                                <label htmlFor="type" className="form-label FormCardBodyGroupTitle">Type</label>
                                <div className="d-flex FormCardBodyGroupInput rounded">
                                  <select className="form-select border-0">
                                    <option defaultValue="main">Main</option>
                                    <option value="track">Track</option>
                                    <option value="post">Post</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="FormCardBodyGroup">
                                <label htmlFor="choice" className="form-label FormCardBodyGroupTitle">Choice</label>
                                <div className="d-flex FormCardBodyGroupInput rounded">
                                  <select className="form-select border-0">
                                    <option value="boolean">Boolean</option>
                                    <option value="choices">Choices</option>
                                    <option value="integer">Integer</option>
                                    <option value="phone_number">Phone Number</option>
                                    <option defaultValue="string">String</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="FormCardBodyGroup">
                                <label htmlFor="value" className="form-label FormCardBodyGroupTitle">Value</label>
                                <div className="d-flex FormCardBodyGroupInput rounded">
                                  <input
                                  type="text"
                                  className="form-control border-0"
                                  id="value"
                                  />
                                </div>
                                </div>
                            </div>
                          </div>
                          <button className="btn btn-primary FormCardBodyGroupButton">Add</button>
                        </div>
                      </div>

                      <table className="table table-responsive-md table-responsive-sm ">
                          <thead>
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Slug</th>
                              <th scope="col">Attribute</th>
                              <th scope="col">Type</th>
                              <th scope="col">Value</th>
                              <th scope="col">Help Text</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Name</td>
                              <td>name</td>
                              <td>String</td>
                              <td>Main</td>
                              <td className="helpText">-</td>
                              <td className="helpText">Name of the customer</td>
                              <td>
                                <i className="fas fa-edit"></i>
                                <i className="fa-solid fa-trash"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>Status</td>
                              <td>status</td>
                              <td>Dropdown</td>
                              <td>Track</td>
                              <td className="helpText">In Progress, Completed</td>
                              <td className="helpText">Current status</td>
                              <td>
                                <i className="fas fa-edit"></i>
                                <i className="fa-solid fa-trash"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeadAttribute;