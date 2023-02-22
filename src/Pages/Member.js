import { useEffect, useState } from "react";
import { getMember } from "../api";
import MemberTable from "../components/MemberTable";
import Sidebar from "../components/Sidebar";

const Member = () => {
    const [memberData, setMemberData] = useState([]);

    const fetchMember = async () => {
        const resp = await getMember();
        console.log(resp.data)
        setMemberData(resp.data);
        localStorage.setItem('member', JSON.stringify(resp.data));
    }
    
    useEffect(() => {
        fetchMember();
    }, [])

    
  const postCreation = (data) => {
    const updateMemberData = [...memberData, data]
    setMemberData(() => updateMemberData)
    localStorage.setItem('member', JSON.stringify(updateMemberData));
  }

  const postDeletion = (index) => {
    memberData.splice(index, 1);
    setMemberData([...memberData])
    localStorage.setItem('member', JSON.stringify(memberData));
  }

  const postUpdate = (index, data) => {
    memberData.splice(index, 1, data);
    setMemberData([...memberData])
    localStorage.setItem('member', JSON.stringify(memberData));
  }

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
                        Member
                      </h2>
                      {/* <div className="topBtn">
                        <div className="topBtnRightSide">
                          <button className="btn createBtn" data-bs-toggle="collapse" data-bs-target="#createLeadStructure" aria-expanded="false" aria-controls="createLeadStructure">
                            Create New
                          </button>
                          <i className="fa-solid fa-file-arrow-down downloadCSV" title="Download Lead Structure in CSV" onClick={downloadCSV}></i>
                        </div>
                        <input type="text" placeholder="Search" />
                      </div>

                      <div className="collapse" id="createLeadStructure">
                        <LeadAttrForm postCreation={postCreation}/>
                      </div> */}

                    <table className="table table-responsive-md table-responsive-sm ">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Email</th>
                          <th scope="col">Role</th>
                          <th scope="col">Is Active</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {memberData &&
                            memberData.map((member, index) => 
                            (<MemberTable
                                key={member.id}
                                index={index}
                                postDeletion={postDeletion}
                                postUpdate={postUpdate}
                                member={member}/>
                            ))
                        }
                      </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Member