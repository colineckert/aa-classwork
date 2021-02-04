import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

// const mapStateToProps = (state) => ({
  
// })

const mapDispatchToProps = dipatch => {
  return {
    createNewUser: formUser => dipatch(createNewUser(formUser))
  }
}

export default connect(null, mapDispatchToProps)(Signup);