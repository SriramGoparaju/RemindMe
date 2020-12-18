import React from 'react';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'. All rights by Radd'}
    </Typography>
  );
}

export default Copyright;