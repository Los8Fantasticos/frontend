import * as React from "react";
import { useState } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Header } from '../components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useStateContext } from '../contexts/ContextProvider';
import CrearPrivilegioDialog from '../components/ModalCrearPrivilegios';
import EditarPrivilegioDialog from '../components/ModalEditarPrivilegios';


export function Privilegios() {
  const [ShowPrivilegeDialog, setShowPrivilegeDialog] = useState(false);
  const [showCreatePrivilegeDialog, setShowCreatePrivilegeDialog] = useState(false);
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
            setShowPrivilegeDialog(true);
          }}
          label="Edit"
        />
      ]
    }
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <EditarPrivilegioDialog show={ShowPrivilegeDialog} close={() => setShowPrivilegeDialog(false)} />
      <CrearPrivilegioDialog show={showCreatePrivilegeDialog} close={() => setShowCreatePrivilegeDialog(false)} />
      <Header category="Pagina" title="Privilegios" />
      <div className="m-2" >
        <button className="text-white text-xl rounded p-3 mb-4"
        style={{ backgroundColor: currentColor }}
        onClick={() => setShowCreatePrivilegeDialog(true)}>
          Crear Privilegio
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