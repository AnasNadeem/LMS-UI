import Sidebar from "../components/Sidebar"

const LeadAttribute = () => {
  return (
    <div class="container-fluid">
        <div class="row">
            <div class="col-2">
                <Sidebar />
            </div>
            <div class="col-10">
                <div class="main">
                    <div class="container-fluid">
                      <h2 class="mainTitle">
                        Lead Structure
                      </h2>
                      <div class="topBtn">
                        <button class="btn createBtn">
                          Create New
                        </button>
                        <input type="text" placeholder="Search" />
                      </div>
                      <table class="table table-responsive-md table-responsive-sm ">
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
                              <td class="helpText">-</td>
                              <td class="helpText">Name of the customer</td>
                              <td>
                                <i class="fas fa-edit"></i>
                                <i class="fa-solid fa-trash"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>Status</td>
                              <td>status</td>
                              <td>Dropdown</td>
                              <td>Track</td>
                              <td class="helpText">In Progress, Completed</td>
                              <td class="helpText">Current status</td>
                              <td>
                                <i class="fas fa-edit"></i>
                                <i class="fa-solid fa-trash"></i>
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

export default LeadAttribute