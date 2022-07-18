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

export default function CrearPrivilegioDialog({show, close}) {

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
                />
              </Stack>
            </div>
          </DialogContent>
          <Divider></Divider>
          <DialogActions>
            <Button onClick={close}>Cancelar</Button>
            <Button onClick={close}>Guardar</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}