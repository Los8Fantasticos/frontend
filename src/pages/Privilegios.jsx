import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Header } from '../components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useStateContext } from '../contexts/ContextProvider';
import { userManagementServices } from '../services/userManagementServices';
import Swal from 'sweetalert2';
import CrearPrivilegioDialog from '../components/ModalCrearPrivilegios';
import EditarPrivilegioDialog from '../components/ModalEditarPrivilegios';


const obtenerPrivilegios = (state) => {
  return {
    privileges: state.privileges
  }
}

export function Privilegios() {
  const [ShowPrivilegeDialog, setShowPrivilegeDialog] = useState(false);
  const [showCreatePrivilegeDialog, setShowCreatePrivilegeDialog] = useState(false);
  const { currentColor } = useStateContext();

  const [privileges, setPrivileges] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    userManagementServices.getAllPrivileges().then(data => {
      setPrivileges(data);
      setLoading(false);
    }
    ).catch((result) => {
      window.location.assign(`${process.env.REACT_APP_WEB_URL}/Inicio`);
    }
    );
  }, []);
  
  const columns = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "name", headerName: "Nombre", width: 200 },
    { field: "normalizedName", headerName: "Nombre Normalizado", width: 200 },
    { field: "actions",
      headerName: "Accionces",
      type: "actions",
      width: 200,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={() => {
            Swal.fire({
              title: 'Estas seguro de eliminar el privilegio?',
              showCancelButton: true,
              confirmButtonText: 'Confirmar',
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                let id = ''+params.row.id;
                userManagementServices.deletePrivilege(id).then(() => {
                  Swal.fire('Se eliminó el privilegio correctamente!', '', 'success')
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
            rows={privileges}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </div>
    </div>
  );
}