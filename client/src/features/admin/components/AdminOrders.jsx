import React from 'react'
import AdminSidebar from './AdminSidebar'
import Layout from '../../../layout/Layout'

const AdminOrders = ({ children }) => {
    return (
        <Layout>
            <div className="paddingClass bg-lightpink  ">
                <div className='bg-white px-8 py-8 '>
                    <h3>Admin Dashboard</h3>
                    <div className='flex'>
                        <AdminSidebar />
                        <div className='adminWrapper'>
                            <div className='px-8'>
                                <h5>Hello, Wasim</h5>
                                <h3>Welcom's to Dashboard</h3>

                            </div>
                            <div>
                                <h1>My orders</h1>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default AdminOrders
