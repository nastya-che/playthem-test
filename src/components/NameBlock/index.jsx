import React, {useState} from 'react';
import './styles.scss';

export const NameBlock = (props) => {

   const [name, setName] = useState(props.name);
   const [surname, setSurname] = useState(props.surname);

   return(
      <div className={'name-block'}>
         <input className={'user-name'}
                value={name}
                onChange={(e) => setName(e.target.value)} />
         <input className={'user-name'}
                value={surname}
                onChange={(e) => setSurname(e.target.value)} />
      </div>
   )

};
