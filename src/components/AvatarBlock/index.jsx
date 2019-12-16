import React from 'react';
import './styles.scss';

export const AvatarBlock = (props) => {
   return(
      <div className={'user-avatar'}>
         <img src={props.avatar} />
      </div>
   )
};
