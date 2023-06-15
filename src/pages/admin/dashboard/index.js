import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
// import { tableDatal, states } from './makeData1';
import baseurl from '../../../config/baseurl';
import axios from 'axios';
import Navbar from '../../../components/Navbar/navbar';

const Example = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState();
  const [validationErrors, setValidationErrors] = useState({});
  

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };


  const [data, setData] = useState([])

  const getData = async() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${baseurl.baseurl}/getprojects`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log("result==>",JSON.parse(result))
        let data = JSON.parse(result)
        console.log(data,"data")
        console.log(data.projects)
        setData(data.data)
      }
        )
      .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    getData()
  },[])



  const handleFormChange = (event) => {
    // const file = URL.createObjectURL(event.target.files[0])
    // console.log()
    const value = event.target.value;
    setInputFields({
        ...inputFields,
        [event.target.name]: value
    });
    console.log(event.target.name,"event.target.name")
    console.log(event.target.value,"event.target.value")
}

const submit = (e) => {
    e.preventDefault();  // is used for to stop reload page on submit
    let { title,Description,StartDate,EndDate} = values
    // console.log(email,password)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var raw = JSON.stringify({
        "title": title,
        "Description": Description,
        "StartDate": StartDate,
        "EndDate": EndDate,
        "action":"login"
    });
    console.log(raw,"raw")
  
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    fetch("http://localhost:3000/api/login", requestOptions).then(response => response.text())
        .then(result => {
            console.log(result)
            let user = JSON.parse(result)
            console.log(user,"user")
            let {message} = user
            if(message === "Login successful"){
                localStorage.setItem('token', result.token)
                Router.push({ pathname: '/dashboard',})

            }
        })
        .catch(error => console.log('error', error));
}





  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
   
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === 'email'
              ? validateEmail(event.target.value)
              : cell.column.id === 'age'
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors],
  );
console.log(data,"data state")
  const columns = useMemo(
    () => [
      
      {
        accessorKey: 'title',
        header: 'title',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'Description',
        header: 'Description',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'StartDate',
        header: 'StartDate',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'date',
        }),
      },
      {
        accessorKey: 'EndDate',
        header: 'EndDate',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'date',
        }),
      },
      {
        accessorKey: 'image',
        header: 'image',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
       

      },

    ],
    [getCommonEditTextFieldProps],
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={columns}
        data={data}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Create New Account
          </Button>
        )}
      />
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
        onData={getData}
      />
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit,onData }) => {
  const [values, setValues] = useState();

  const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileSelect = (event) => {
      const files = event.target.files;
      setSelectedFiles([...selectedFiles, ...files]);
    };
  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };





  const submit = () => {
        let { title,Description,StartDate,EndDate} = values

    const Data = new FormData();
    // if(selectedFiles < 1){
      selectedFiles.map((e,i)=>{ Data.append(`image`, e);})
      Data.append("title",title)
      Data.append("Description",Description)
      Data.append("StartDate",StartDate)
      Data.append("EndDate",EndDate)

    // }
    // else{
    //   Data.append("image",title)
    //   Data.append("Description",Description)
    //   Data.append("StartDate",StartDate)
    //   Data.append("EndDate",EndDate)
    // }
    var config = {
      method: "POST",
      url: `${baseurl.baseurl}/addproject`,
      data: Data,
      headers: {
        Accept: "application/json",
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response,"response");
        onData()
        onClose();
        // SetArray(response?.data?.message);
    
      })
      .catch(function (error) {
        console.log(error,"error");

        // window.scrollTo({
        //   top: 0,
        //   behavior: "smooth",
        // });
        // setBund(error?.response?.data?.errors);
        // // const keys = Object.keys(error?.response?.data?.errors);
        // // keys.forEach((element, i) => {
        // //   console.log(error?.response?.data?.errors[element][0]);
        // });
        // Swal.fire({
        //   toast: true,
        //   icon: "error",
        //   title: error?.response?.data?.message,
        //   animation: true,
        //   position: "top-right",
        //   showConfirmButton: false,
        //   timer: 3000,
        //   timerProgressBar: true,
        //   didOpen: (toast) => {
        //     toast.addEventListener("mouseenter", Swal.stopTimer);
        //     toast.addEventListener("mouseleave", Swal.resumeTimer);
        //   },
        // });
      });
  };


  console.log(selectedFiles,"selectedFiles")
  console.log( selectedFiles.map((e,i)=> e)," selectedFiles.map((e,i)=>{ Data.append(`image[${i}]`, e?.file);})")
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

//   const submit = (e) => {
//     e.preventDefault();  // is used for to stop reload page on submit
//     let { title,Description,StartDate,EndDate} = values
//     const Data = new FormData();
//     selectedFiles.map((e,i)=>{ Data.append(`image[${i}]`, e);})
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
// console.log(values)
// const images = selectedFiles.map((e,i)=>{`image${i}:${e?.file}`})
//     var raw = JSON.stringify({
//         "title": title,
//         "Description": Description,
//         "StartDate": StartDate,
//         "EndDate": EndDate,
//         "action":"login",
//       ...images });
//     console.log(raw,"raw")
  
//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: Data,
//     };

//     fetch(`${baseurl.baseurl}/addproject`, requestOptions).then(response => response.text())
//         .then(result => {
//             // console.log(result)
//             let user = JSON.parse(result)
//             console.log(user,"user")
//             let {message} = user
//             if(message === "Login successful"){
//                 localStorage.setItem('token', result.token)
//                 Router.push({ pathname: '/dashboard',})

//             }
//         })
//         .catch(error => console.log('error', error));
// }

  return (
    <Dialog open={open}>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />   
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({...values, [e.target.name]: e.target.value })
                }
              />
            ))}
      <input type="file" multiple onChange={handleFileSelect} />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={submit} variant="contained">
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default Example;
