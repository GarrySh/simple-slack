import { reduxForm } from 'redux-form';
import { connect as reduxConnect } from 'react-redux';
import * as actionCreators from './actions';

export const withConnect = mapStateToProps => Component =>
  reduxConnect(mapStateToProps, actionCreators)(Component);

export const withForm = formName => Component =>
  reduxForm({
    form: formName,
  })(Component);
