import React from 'react';

import { validationEmail, emptyField } from '../utils';

const useFormValidationRules = e => {
	const [ empty, setEmpty ] = React.useState(false);

	const handleEmptyValidation = e => {
		setEmpty(emptyField(e.target.value));
	};

	const [ validEmail, setValidEmail ] = React.useState(false);

	const handleEmailValidation = e => {
		setValidEmail(validationEmail(e.target.value));
	};

	return { handleEmptyValidation, handleEmailValidation, empty, validEmail };
};

export default useFormValidationRules;
