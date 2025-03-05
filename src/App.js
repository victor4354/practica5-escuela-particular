import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const PrimeroButton = styled(Button)({
  borderRadius: '50%', // Circular
  width: '200px', // Ajusta el tamaño
  height: '200px', 
  minWidth: '200px', // Mantener forma circular
  backgroundColor: '#404040', // Gris oscuro casi negro
  color: 'white',
  fontSize: '24px', // Tamaño de texto
  textTransform: 'none', // Mantener texto original
  fontWeight: 'normal', // Tipo de letra normal
  '&:hover': {
    backgroundColor: '#505050' // Ligero cambio al pasar el mouse
  }
});

function App() {
  const handleClick = () => {
    alert('Botón presionado');
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#F0F2F5' // Fondo claro
    }}>
      <PrimeroButton 
        variant="contained" 
        onClick={handleClick}
      >
        primero
      </PrimeroButton>
    </div>
  );
}

export default App;