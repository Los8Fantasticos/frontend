import * as React from "react";
import { useState } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Header } from '../components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useStateContext } from '../contexts/ContextProvider';
import EditarUsuarioDialog from '../components/ModalEditarUsuario';
import CrearUsuarioDialog from '../components/ModalCrearUsuario';

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, add: "test" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
];

export function Usuarios() {
  const [showUserDialog, setShowUserDialog] = useState(false);
  const [showCreateUserDialog, setShowCreateUserDialog] = useState(false);
  const { currentColor } = useStateContext();

  const columns = [
    { field: "id", headerName: "ID", width: 140 },
    { field: "firstName", headerName: "Nombre", width: 260 },
    { field: "lastName", headerName: "Apellido", width: 260 },
    {
      field: "Email",
      headerName: "Email",
      width: 440
    },
    {
      field: "phoneNumber",
      headerName: "Teléfono",
      width: 440
    },
    {
      field: "fullName",
      headerName: "Nombre Completo",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 320,
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
          onClick={() => {}}
          label="Delete"
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          onClick={() => {
            setShowUserDialog(true);
          }}
          label="Edit"
        />
      ]
    }
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <EditarUsuarioDialog show={showUserDialog} close={() => setShowUserDialog(false)}/>
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
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </div>
    </div>
  );
}