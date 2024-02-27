import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate, useLocation } from 'react-router-dom';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { modifyPermission } from '../Services/api';

function PermissionEdit() {
  const location = useLocation();
  const [permission, setPermission] = useState(location.state);
  const [message, setMessage] =useState('');
  const [status, setStatus] =useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    setOpen(true);
    try {
      await modifyPermission(permission.id, permission);
      setMessage('¡El permiso se modificó exitosamente!');
      setStatus('success');
      setTimeout(() => {
        setMessage('');
        setStatus('');
        navigate('/');
        setOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Error al guardar cambios:', error);
      setMessage('Error al modificar permiso');
      setStatus('error');
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4">Editar Permiso</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Nombre Empleado"
            variant="outlined"
            fullWidth
            value={permission?.nombreEmpleado || ''}
            onChange={(e) => setPermission({ ...permission, nombreEmpleado: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Apellido Empleado"
            variant="outlined"
            fullWidth
            value={permission?.apellidoEmpleado || ''}
            onChange={(e) => setPermission({ ...permission, apellidoEmpleado: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Tipo Permiso ID"
            variant="outlined"
            fullWidth
            value={permission?.tipoPermisoId || ''}
            onChange={(e) => setPermission({ ...permission, tipoPermiso: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Fecha Permiso"
            type="date"
            variant="outlined"
            fullWidth
            value={permission?.fechaPermiso?.split('T')[0] || ''}
            onChange={(e) => setPermission({ ...permission, fechaPermiso: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Guardar</Button>
        </Grid>

        {message &&
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={status}>
            {message}
          </MuiAlert>
          </Snackbar>
        }
      </Grid>
    </Container>
  );
}

export default PermissionEdit;
