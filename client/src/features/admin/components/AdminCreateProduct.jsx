import './Admin.css'
import AdminSidebar from './AdminSidebar'
import Layout from '../../../layout/Layout'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import postCategory, { fetchCategories } from '../AdminSlice'
// import { fetchCategoryList } from '../AdminCategorySlice'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import REACT_API_KEY from '../../../../../client/'

// icons 
import { CiCircleRemove, CiEdit } from 'react-icons/ci'
import { fetchCategoryData } from '../AdminSlice'


const AdminCreateProduct = () => {

    const API_KEY = `http://localhost:3030/api/categories`
    // const API_KEY = 'https://jsonplaceholder.typicode.com/users'






    // react state 
    const [categoryInput, setCategoryInput] = useState('')
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");


    // redux state 
    // const { categoryData } = useSelector((state) => state.admin)
    // const categoryFetch = useSelector((state) => state.admin.categoryData)

    const dispatch = useDispatch();

    // const categoryHandler = (e) => {
    //     axios.post(API_KEY, {
    //         categoryInput
    //     }).then((response) => {
    //         setCategoryInput(response.data)
    //         console.log(response)

    //     }).catch((error) => console.log("post error", error))
    //     setCategoryInput('');
    //     let categoryListData = {
    //         categoryInput
    //     }
    //     // dispatch(postCategory(categoryListData))


    // }
    useEffect(() => {
        // axios
        //     .get("http://localhost:3030/api/categories")
        //     .then((response) => setMyData(response.data))
        //     .catch((error) => setIsError(error.message));
        dispatch(fetchCategoryData());
    }, []);
    const cart = [
        {
            id: 1,
            task: "asdfasfasdf"
        },
        {
            id: 2,
            task: "asdfasfasdf"
        },
        {
            id: 3,
            task: "asdfasfasdf"
        },
        {
            id: 4,
            task: "asdfasfasdf"
        }
    ]
    return (
        <Layout>
            <div className="paddingClass bg-lightpink  ">
                <div className='bg-white px-8 py-8 '>
                    <h3>Admin Dashboard</h3>
                    <div className='flex'>
                        <AdminSidebar />
                        <div className='adminWrapper w-full  overflow-hidden '>
                            {/* <div className='admin-nav px-8 bg-primary w-full '>
                                <h5>Hello, Wasim</h5>
                                <h3>Welcom's to Dashboard</h3>

                            </div> */}
                            <div className='px-8'>
                                <h3>Categoryies</h3>
                                <div className='flex mt-5  '>
                                    <input className='px-4 py-2 w-half poppins text-sm' value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)} type="text" placeholder='Type your category here' />
                                    <button className='px-4 py-2 bg-primary poppins pointer '>Add</button>
                                </div>
                                <div className='all-cateogires mt-5 '>
                                    <h3> All Categories</h3>
                                    <div className='all-categories-wrapper mt-4 '>
                                        <div className="categories-table  ">
                                            <div className=" py-4 px-4 categories-tabl-content table-bg flex bg-primary justify-between   ">

                                                <div className='categories-list'>Categories </div>
                                                <div className='categories-remarks'>Remarks</div>



                                            </div>
                                            {myData.map((el, id) => (
                                                <div key={id} className="table-content flex  justify-between ">


                                                    <div>{el.name}</div>
                                                    <div className='flex gap-4 '>
                                                        <li><Link><CiEdit size={25} /></Link></li>
                                                        <li><Link><CiCircleRemove size={25} /></Link></li>
                                                    </div>



                                                </div>
                                            ))}
                                        </div>





                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default AdminCreateProduct
