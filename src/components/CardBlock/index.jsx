import React, {Component} from 'react';
import './styles.scss';
import {AvatarBlock} from '../AvatarBlock';
import {NameBlock} from '../NameBlock';
import {RemoveBtn} from '../../containers/RemoveBtn';

class CardBlockImpl extends Component{

   constructor(props) {
      super(props);
      this.state = { pictures: [] };
      this.onDrop = this.onDrop.bind(this);
   }

   onDrop(picture) {
      this.setState({
         pictures: this.state.pictures.concat(picture),
      });
   }

   render(){
      const {userId, name, surname, avatar} = this.props;
      return(
         <div className={'card-block'}>
            <RemoveBtn
               userId={userId} />
            <div className={'avatar-area'}>
               <AvatarBlock
                  avatar={avatar} />
               <NameBlock
                  name={name}
                  surname={surname} />
            </div>
         </div>
      )
   }
}

export const CardBlock = CardBlockImpl;