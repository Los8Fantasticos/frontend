import * as React from "react";
import { useState } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Header } from '../components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useStateContext } from '../contexts/ContextProvider';
import EditarUsuarioDialog from '../components/ModalEditarUsuario';
import Swal from 'sweetalert2';
import CrearUsuarioDialog from '../components/ModalCrearUsuario';
import { userManagementServices } from '../services/userManagementServices';

export function Usuarios() {
  const [showUserDialog, setShowUserDialog] = useState(false);
  const [showCreateUserDialog, setShowCreateUserDialog] = useState(false);
  const { currentColor } = useStateContext();

  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState([]);


  function getUsers() {
    userManagementServices.getAllUsers().then(data => {
      setUsers(data);
      setLoading(false);
    }
    ).catch((result) => {
      window.location.assign(`${process.env.REACT_APP_WEB_URL}/Inicio`);
    }
    );
  }
  
  React.useEffect(() => {
    getUsers()
  }, []);
  

  const columns = [
    {
      field: "email",
      headerName: "Usuario",
      width: 140
    },
    { field: "firstName", headerName: "Nombre", width: 140 },
    { field: "lastName", headerName: "Apellido", width: 140 },
    {
      field: "phoneNumber",
      headerName: "Teléfono",
      width: 140
    },
    {
      field: "fullName",
      headerName: "Nombre Completo",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 220,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`
    },
    {
      field: "actions",
      headerName: "Accionces",
      type: "actions",
      width: 190,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={() => {Swal.fire({
            title: 'Estas seguro de eliminar el usuario?',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              let id = ''+params.row.id;
              userManagementServices.deleteUser(id).then(() => {
                Swal.fire('Se desactivó el usuario correctamente!', '', 'success')
                .then(() => {
                  window.location.reload();
                })
            }).catch((result2) => {
                Swal.fire(result2.detail, '', 'error')
            })
            } 
          })
        }}
        label="Delete"
      />,
        <GridActionsCellItem
          icon={<EditIcon />}
          onClick={() => {
            setShowUserDialog(true);
            setUser(params.row);
          }}
          label="Edit"
        />
      ]
    }
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <EditarUsuarioDialog show={showUserDialog} close={() => setShowUserDialog(false)} usuario={user} onSave={()=> getUsers() }/>
      <CrearUsuarioDialog show={showCreateUserDialog} close={() => setShowCreateUserDialog(false)}/>
      <Header category="Pagina" title="Usuarios" />
      <div className="m-2" >
        <button className="text-white text-xl rounded p-3 mb-4"
        style={{ backgroundColor: currentColor }}
        onClick={() => setShowCreateUserDialog(true)}>
          Crear Usuario
        </button>
      </div>
        <div style={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </div>
    </div>
  );
}