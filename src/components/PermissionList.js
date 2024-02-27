import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getPermissions } from '../Services/api';

const PermissionList = () => {
  const [permissions, setPermissions] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (permission) => {
    navigate('/permission-edit',{state:permission});
  };

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await getPermissions();
        setPermissions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPermissions();
  }, []);

  return (
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombre Empleado</TableCell>
            <TableCell>Apellido Empleado</TableCell>
            <TableCell>Tipo Permiso</TableCell>
            <TableCell>Fecha Permiso</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {permissions.map(permission => (
            <TableRow key={permission.id}>
              <TableCell>{permission.id}</TableCell>
              <TableCell>{permission.nombreEmpleado}</TableCell>
              <TableCell>{permission.apellidoEmpleado}</TableCell>
              <TableCell>{permission.tipoPermisoId}</TableCell>
              <TableCell>{permission.fechaPermiso}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(permission)} variant="contained" color="primary">Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PermissionList;
