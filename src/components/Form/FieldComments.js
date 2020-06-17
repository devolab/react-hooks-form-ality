import React from 'react';
import PropTypes from 'prop-types';
import ErrorField from './ErrorField';
import useFormValidationRules from '../useFormValidationRules';
import { LIST_ERRORS } from '../../constants';

import './Form.scss';

const FieldComments = ({ name, placeholder, required }) => {
	const { handleEmptyValidation, empty } = useFormValidationRules();

	return (
		<React.Fragment>
			<div className='form__container'>
				<textarea
					id={name}
					name={name}
					onChange={handleEmptyValidation}
					placeholder={placeholder}
					className='form__textarea'
				/>
			</div>
			{empty && required && <ErrorField errorMessage={LIST_ERRORS.EMPTY} />}
		</React.Fragment>
	);
};

FieldComments.defaultProps = {
	type: 'textarea'
};

FieldComments.propTypes = {
	onChange: PropTypes.func,
	empty: PropTypes.bool,
	required: PropTypes.bool,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired
};

export default FieldComments;
