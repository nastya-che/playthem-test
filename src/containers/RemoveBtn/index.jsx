import React from 'react';
import './styles.scss';
import {connect} from 'react-redux';
import {removeUserCard} from "../../redux/actions/usersActions";
import Clear from '@material-ui/icons/ClearRounded';

const RemoveBtnImpl = (props) => {
   return(
      <button className={'remove-btn'}
              onClick={() => props.removeCard(props.userId)}>
         <Clear />
      </button>
   )
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => {
   return{
      removeCard: (userId) => dispatch(removeUserCard(userId))
   }
};

export const RemoveBtn = connect(mapStateToProps, mapDispatchToProps)(RemoveBtnImpl);

