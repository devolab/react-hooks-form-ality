import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

const FieldRadio = ({ radio: { id, label }, name }) => {
	return (
		<React.Fragment>
			<input id={id} name={name} type='radio' className='form__radio-button' />
			<span>{label}</span>
		</React.Fragment>
	);
};

FieldRadio.defaultProps = {
	type: 'radio'
};

FieldRadio.propTypes = {
	id: PropTypes.func,
	label: PropTypes.string,
	name: PropTypes.string.isRequired
};

export default FieldRadio;
