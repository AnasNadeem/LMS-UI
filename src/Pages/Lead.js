import Sidebar from "../components/Sidebar";
import LeadForm from "../components/LeadForm";

const Lead = () => {
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
                        Lead
                      </h2>
                      <div className="topBtn">
                      <button className="btn createBtn" data-bs-toggle="collapse" data-bs-target="#createLeadForm" aria-expanded="false" aria-controls="createLeadForm">
                          Create New
                        </button>
                        <button className="btn createBtn">
                            Filters
                        </button>
                      </div>

                      <div className="collapse" id="createLeadForm">
                        <LeadForm />
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

export default Lead