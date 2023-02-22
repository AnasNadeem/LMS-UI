import Sidebar from "../components/Sidebar";

const Member = () => {
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
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Member