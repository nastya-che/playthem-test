import React from 'react';
import './styles.scss';
import UploadPhoto from '@material-ui/icons/CloudUploadOutlined'

export const ChangeAvatarBtn = () => {
   return(
      <button className={'change-avatar'}>
         change photo
         <UploadPhoto />
      </button>
   )
};
