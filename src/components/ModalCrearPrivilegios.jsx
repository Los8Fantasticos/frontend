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
import { userManagementServices } from "../services/userManagementServices";

export default function CrearPrivilegioDialog({show, close, onSave}) {
  
  const [nombre, setNombre] = React.useState({ privilegeName: ""});

  async function createPrivilege(data) {
    await userManagementServices.createPrivilege(data);
  }

  const handlePrivilegePropertyChange = (event) => {
    setNombre({...nombre, [event.target.name]: event.target.value});
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
          <DialogTitle>Crear Privilegio</DialogTitle>
          <Divider></Divider>
          <DialogContent>
            <div>
              <Stack direction="row" spacing={2}>
                <TextField
                  autoFocus
                  marginb="4"
                  id="nombre"
                  label="Nombre"
                  type="text"
                  fullWidth
                  variant="filled"
                  name="privilegeName"
                  onChange={handlePrivilegePropertyChange}
                />
              </Stack>
            </div>
          </DialogContent>
          <Divider></Divider>
          <DialogActions>
            <Button onClick={close}>Cancelar</Button>
            <Button onClick={async () => {
              await createPrivilege(nombre);
              onSave();
              close();
              }}>Guardar</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}