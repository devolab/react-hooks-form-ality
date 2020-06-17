import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleFormSubmit, children }) => {
	return <form submit='handleFormSubmit'>{children}</form>;
};

Form.propTypes = {
	children: PropTypes.node
};

export default Form;
