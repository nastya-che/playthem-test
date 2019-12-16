import React, {Component} from 'react';
import './styles.scss';
import {CardBlock} from "../components/CardBlock";
import {fetchUsers} from "../redux/actions/fetchUsersAction";
import {connect} from 'react-redux';

class CardsList extends Component{

   componentDidMount(){
      this.props.fetchUsers();
   }

   render(){
      const {users} = this.props;
      let usersArr = users && users.map((user, index) => {
         return(
            <CardBlock
               key={`card-${user.id}`}
               name={user.first_name}
               surname={user.last_name}
               userId={index}
               avatar={user.avatar}
            />
         )
      });

      return(
         <div className={'cards-list'}>
            {usersArr}
         </div>
      )
   }
}

const mapStateToProps = state => ({
   users: state.users.items,
});

const mapDispatchToProps = dispatch => {
   return {
      fetchUsers: () => dispatch(fetchUsers())
   }
};


export default connect(mapStateToProps, mapDispatchToProps)(CardsList);