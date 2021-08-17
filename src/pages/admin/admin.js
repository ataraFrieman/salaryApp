import React from 'react';
import { connect } from 'react-redux'
import { actions } from '../../redux/actions/action'

import AdminLayout from '../../layouts/admin'
import AllEmployees from '../../components/employees/allEmployees'
import WrapperApp from '../../components/wrappers/wrapperApp'
import './admin.css';


const Admin = (props) => {
  return (
    <AdminLayout >
      <WrapperApp>
        <AllEmployees {...props}/>
      </WrapperApp>
    </AdminLayout>
  )

}

const mapStateToProps = state => ({
  ...state.employeeReducer
})

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(actions.getData()),

  setEmployeeFiled: (data) => dispatch(actions.setEmployeeFiled(data)),

  setSelectedEmployees: (data) => dispatch(actions.setSelectedEmployees(data)),

  executePayments:(data) => dispatch(actions.executePayments(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)