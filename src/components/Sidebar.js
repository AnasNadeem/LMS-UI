import { logout } from '../utils';

const Sidebar = () => {
  return (
    <div className="container sidebar">
        <div className="sidebarBody">
        <li>
            <a className="sidebarBodyA" href="/lead">
                Lead
            </a>
        </li>
        <li>
            <a className="sidebarBodyA" href="/leadstructure">
            Structure
            </a>
        </li>
        <li>
            <button className="sidebarBodyA" onClick={logout}>
                Logout
            </button>
        </li>
        </div>
    </div>
  )
}

export default Sidebar;