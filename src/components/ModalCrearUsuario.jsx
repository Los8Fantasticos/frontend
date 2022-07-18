import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import { userManagementServices } from "../services/userManagementServices";

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function CrearUsuarioDialog({show, close, onSave}) {
  const [usuarioRegistrado, setUsuarioRegistrado] = React.useState({ FirstName: "", LastName: "", Email: "", Password: "", ConfirmPassword: "", PhoneNumber: "", id: "" });

  async function createUser(left) {
    let result = await userManagementServices.createUser(usuarioRegistrado);
    usuarioRegistrado.id = result;
    await userManagementServices.assignRolesToUser(usuarioRegistrado.id, left);
  }

  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([]);
  const [right, setRight] = React.useState([]);

  async function getPrivileges() {
    try {
      const privileges = await userManagementServices.getAllPrivileges();
      setRight(privileges.map(privilege => privilege.name));
    }
    catch (error) {
      window.location.assign(`${process.env.REACT_APP_WEB_URL}/Inicio`);
    }
  };

  React.useEffect(() => {
    if (show) {
      getPrivileges();
    }
  }, [show]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleUserPropertyChange = (event) => {
    setUsuarioRegistrado({...usuarioRegistrado, [event.target.name]: event.target.value});
  }


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              "aria-label": "all items selected"
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 200,
          height: 230,
          bgcolor: "background.paper",
          overflow: "auto"
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;
          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

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
          <DialogTitle>Crear Usuario</DialogTitle>
          <Divider></Divider>
          <DialogContent>
            <div>
              <Stack direction="row" spacing={2}>
                <TextField
                  autoFocus
                  id="nombre"
                  label="Nombre"
                  type="text"
                  fullWidth
                  variant="filled"
                  onChange={handleUserPropertyChange}
                  name="FirstName"
                />
                {<Divider orientation="vertical" flexItem />}
                <TextField
                  id="apellido"
                  label="Apellido"
                  type="text"
                  fullWidth
                  variant="filled"
                  onChange={handleUserPropertyChange}
                  name="LastName"
                />
              </Stack>
            </div>
            <TextField
              sx={{ mt: 2 }}
              label="Teléfono"
              type="text"
              fullWidth
              variant="filled"
              onChange={handleUserPropertyChange}
              name="PhoneNumber"
            />
            <TextField
              sx={{ mt: 2 }}
              label="Email"
              type="email"
              fullWidth
              variant="filled"
              onChange={handleUserPropertyChange}
              name="Email"
            />
            <TextField
              sx={{ mt: 2 }}
              label="Contraseña"
              type="password"
              fullWidth
              variant="filled"
              onChange={handleUserPropertyChange}
              name="Password"
            />
            <TextField
              sx={{ mt: 2 }}
              label="Repetir Contraseña"
              type="password"
              fullWidth
              variant="filled"
              onChange={handleUserPropertyChange}
              name="ConfirmPassword"
            />
          </DialogContent>
          <Divider></Divider>
          <DialogContent>
            <div>
              <DialogContentText>
                Asignar privilegios al usuario:
              </DialogContentText>
              <div>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>{customList("Roles del usuario", left)}</Grid>
                  <Grid item>
                    <Grid container direction="column" alignItems="center">
                      <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                      >
                        &gt;
                      </Button>
                      <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                      >
                        &lt;
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item>{customList("Roles disponibles", right)}</Grid>
                </Grid>
              </div>
            </div>
          </DialogContent>
          <Divider></Divider>
          <DialogActions>
            <Button onClick={close}>Cancelar</Button>
            <Button onClick={async () => {
              await createUser(left);
              onSave();
              close();
              }}>Guardar</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
