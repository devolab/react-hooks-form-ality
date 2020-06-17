import React from 'react';
import PropTypes from 'prop-types';
import ErrorField from './ErrorField';
import EmailIcon from '@material-ui/icons/Email';
import useFormValidationRules from '../useFormValidationRules';
import { LIST_ERRORS } from '../../constants';

import './Form.scss';

const FieldEmail = ({ name, placeholder, required }) => {
	const {
		handleEmptyValidation,
		handleEmailValidation,
		empty,
		validEmail
	} = useFormValidationRules();

	return (
		<React.Fragment>
			<div className='form__container'>
				<EmailIcon className='form-icon' />
				<input
					id={name}
					name={name}
					type='email'
					onChange={handleEmailValidation && handleEmptyValidation}
					placeholder={placeholder}
					className='form__field'
				/>
			</div>

			{empty && required && <ErrorField errorMessage={LIST_ERRORS.EMPTY} />}

			{!empty &&
			!validEmail && <ErrorField errorMessage={LIST_ERRORS.INVALID_EMAIL} />}
		</React.Fragment>
	);
};

FieldEmail.defaultProps = {
	type: 'email'
};

FieldEmail.propTypes = {
	onChange: PropTypes.func,
	empty: PropTypes.bool,
	required: PropTypes.bool,
	validEmail: PropTypes.bool,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired
};

export default FieldEmail;
