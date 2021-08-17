import React from 'react'

const Footer = (props) => {
    const {
        selectedEmployees,
        executePayments,
        setErrors
    } = props;

    const executPay = (data) => {
        if (selectedEmployees.length > 0) {
            executePayments(data)
        }
        else {
            setErrors('Opss you have not selected a user..')
        }
    }
    return (
        <div className="footer-container">
            <button className="payment"
                onClick={() =>
                    executPay({ list: 'selectedEmployees', key: 'paid', value: true })
            }>Pay a salary</button>

            <button className="cancel"
                onClick={() =>
                    executPay({ list: 'selectedEmployees', key: 'paid', value: false })
            }>Cancel</button> 
        </div>
    )
}
export default Footer;