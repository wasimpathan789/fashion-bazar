import "./Admin.css";
import { Link } from 'react-router-dom'
// icons
import { MdPersonalInjury } from "react-icons/md";
const AdminSidebar = () => {
    return (
        <div className="admin-sidebar">
            <div className="admin-sidebar-items flex gap-2 mb-4 w-full mb-5 ">
                <Link to={'/adminCategory'}>
                    <MdPersonalInjury size={20} />
                    <span className="font-light gray text-lg">Categories</span>
                </Link>

            </div>
            <div className="admin-sidebar-items flex gap-2 mb-4 w-full mb-5 ">
                <Link to={'/adminCreateProduct'}>
                    <MdPersonalInjury size={20} />
                    <span className="font-light gray text-lg">New Product</span>
                </Link>

            </div>

            <div className="admin-sidebar-items flex gap-2 mb-4 w-full mb-5 ">
                <Link to={'/adminOrder'}>
                    <MdPersonalInjury size={20} />
                    <span className="font-light gray text-lg">Orders</span>
                </Link>

            </div>
            <div className="admin-sidebar-items flex gap-2 mb-4 w-full mb-5 ">
                <Link>
                    <MdPersonalInjury size={20} />
                    <span className="font-light gray text-lg">Personal Information</span>
                </Link>

            </div>
            <div className="admin-sidebar-items flex gap-2 mb-4 w-full mb-5 ">
                <Link>
                    <MdPersonalInjury size={20} />
                    <span className="font-light gray text-lg">Personal Information</span>
                </Link>

            </div>
            <div className="admin-sidebar-items flex gap-2 mb-4 w-full mb-5 ">
                <Link>
                    <MdPersonalInjury size={20} />
                    <span className="font-light gray text-lg">Personal Information</span>
                </Link>

            </div>
            <div className="admin-sidebar-items flex gap-2 mb-4 w-full mb-5 ">
                <Link>
                    <MdPersonalInjury size={20} />
                    <span className="font-light gray text-lg">Personal Information</span>
                </Link>

            </div>
            <div className="admin-sidebar-items flex gap-2 mb-4 w-full mb-5 ">
                <Link>
                    <MdPersonalInjury size={20} />
                    <span className="font-light gray text-lg">Personal Information</span>
                </Link>

            </div>
        </div>
    );
};

export default AdminSidebar;
