import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { userManagementServices } from '../services/userManagementServices';


export default function EditarPrivilegioDialog({show, close, privilegio, onSave}) {
  
  async function editPrivileges(privilegio) {
    const nuevoNombre = document.getElementById("nombreNuevo").value;
    privilegio.PrivilegeNewName = nuevoNombre;
    await userManagementServices.editPrivilege(privilegio);
  }

  return (
    <div>
      <Dialog open={show} onClose={close}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "full" }
          }}
          noValidate
          autoComplete="off"
        >
          <DialogTitle>Editar Privilegio</DialogTitle>
          <Divider></Divider>
          <DialogContent>
            <div>
              <Stack direction="row" spacing={2}>
                <TextField
                  autoFocus
                  id="nombreActual"
                  label="Nombre Actual"
                  type="text"
                  value={privilegio.name}
                  InputProps={{
                    readOnly: true
                  }}
                  fullWidth
                  variant="filled"
                />
                <TextField
                  autoFocus
                  id="nombreNuevo"
                  label="Nombre Nuevo"
                  type="text"
                  fullWidth
                  variant="filled"
                />
              </Stack>
            </div>
          </DialogContent>
          <Divider></Divider>
          <DialogActions>
            <Button onClick={close}>Cancelar</Button>
            <Button onClick={async () => {
              await editPrivileges(privilegio);
              onSave(); //fijate explota aca, pero crea el usuario bien, no se si hacer un refresh nomas..
              close();
              }}>Guardar</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}

