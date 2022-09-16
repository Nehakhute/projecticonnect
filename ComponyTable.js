import React ,{useEffect, useState}from 'react'
import 'antd/dist/antd.css';
import {Table,Button,Pagination} from 'antd'
import './company.css'
import {useDispatch, useSelector} from 'react-redux';
import {setDetails} from "./redux/actions/DetailActions"
import axios from 'axios';
import EditPage from './EditPage';
function ComponyTable() {
    const details = useSelector((state)=>state.allDetails.details);
   
    const dispatch = useDispatch();
    const [tableData,setTableData] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const hitCount = <obtained from the api call></obtained>

    const deleteRow = async (id) => {  
        const response = await axios .delete(`http://localhost:4000/api/company/${id}`)  
     }  

    const getData = async () =>{

        const response =await axios .get("http://localhost:4000/api/company")
        
        .catch((err)=>{
            console.error("Err: ",err);
        });
        dispatch(setDetails(response.data))
    }
    useEffect(()=>{
        getData();
    },[]);

    console.log("Details",details)
    const column =[
        {
            key:"name",
            title: 'Name',
            dataIndex: 'name',
            sortDirections: ['descend', 'ascend'],
            sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            key:"description",
            title: 'Description',
            dataIndex: 'description'
        },
        {
            key:"contact",
            title: 'Contact',
            dataIndex: 'contact',
            sortDirections: ['descend', 'ascend'],
            sorter: (a, b) => a.contact.localeCompare(b.contact)
        },
        {
            key:"email",
            title: 'Email',
            dataIndex: 'email'
        },
        {
            key:"action",
            title: 'Action',
            dataIndex: 'action',
            render:()=>{
                return (
                    <>
                    <Button style={{backgroundColor:"blue",color:"#fff",marginRight:"10px"}}><EditPage />Edit</Button>
                    <Button style={{backgroundColor:"red",color:"#fff",marginRight:"10px"}} onClick={()=>deleteRow()}>Delete</Button>
                    </>
                )
            },
        }
    ] 

    const RowData =[
        {
            name:"Neha",
            description:"Hello",
            contact:"1234567891",
            email:"abc2gmail.com"
        },
        {
            name:"Neha",
            description:"Hello",
            contact:"1234567891",
            email:"abc2gmail.com"
        },
        {
            name:"Neha",
            description:"Hello",
            contact:"1234567891",
            email:"abc2gmail.com"
        }
    ]
  return (
    <div className='main-blk'>
        <h1 style={{marginTop:"30px"}}>Data Table</h1>
        
            <input className='search-input'/>
        {/* <table className='company-table'>
            <thead className='table-head'>
                <tr>
                    <th>#Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='table-body'>
                {tableData.map(brand =>{
                    return (
                        <tr key={brand._id}>
                            <td>{brand._id}</td>
                            <td>{brand.name}</td>
                            <td>{brand.description}</td>
                            <td>{brand.contact}</td>
                            <td>{brand.email}</td>
                            <td>
                               <button style={{backgroundColor:"blue",color:"#fff",marginRight:"20px",borderRadius:"4px"}}>Edit</button>
                                <button style={{backgroundColor:"red",color:"#fff",borderRadius:"4px"}} onClick={()=>deleteData(brand._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table> */}
        <Table columns={column} dataSource={details} className="table-blk" pagination={false}></Table>
         <Pagination current={pageIndex} total={hitCount} onChange={(page, size) => {setPageIndex(page); setPageSize(size)}} className="pagination"/>
    </div>
  )
}

export default ComponyTable;