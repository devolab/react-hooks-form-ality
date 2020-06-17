import React from 'react';
import PropTypes from 'prop-types';
import {
	Logo,
	Form,
	FieldEmail,
	FieldLabel,
	FieldComments,
	FieldRadio,
	Divider,
	Button
} from '../../components';

import { CONTENT } from '../../constants';

import Grid from '@material-ui/core/Grid';

import './Core.scss';

const RADIO_ARRAY = [
	{
		id: 1,
		label: 'Red'
	},
	{
		id: 2,
		label: 'Blue'
	},
	{
		id: 3,
		label: 'Green'
	},
	{
		id: 4,
		label: 'Yellow'
	},
	{
		id: 5,
		label: 'Orange'
	}
];

const handleButtonClick = () => {
	console.log('ABC');
};

const Core = () => {
	return (
		<React.Fragment>
			<Grid container direction='column' alignItems='center'>
				<figure className='core-logo'>
					<Logo />
				</figure>

				<Grid item sm={6} xs={12}>
					<Form>
						<FieldLabel name={CONTENT.NAME.EMAIL} label={CONTENT.LABEL.EMAIL} />
						<FieldEmail
							name={CONTENT.NAME.EMAIL}
							placeholder={CONTENT.PLACEHOLDER.EMAIL}
							required={true}
						/>

						<Divider />

						<FieldLabel
							name={CONTENT.NAME.COMMENTS}
							label={CONTENT.LABEL.COMMENTS}
						/>
						<FieldComments
							name={CONTENT.NAME.COMMENTS}
							placeholder={CONTENT.PLACEHOLDER.COMMENTS}
							required={true}
						/>

						<Divider />

						<FieldLabel name={CONTENT.NAME.RADIO} label={CONTENT.LABEL.RADIO} />

						{RADIO_ARRAY.map(item => (
							<div key={item.id} className='form__radio-container'>
								<FieldRadio radio={item} name='color' />
							</div>
						))}

						<Button
							onClick={handleButtonClick}
							type='button'
							buttonStyle='btn--secondary--solid'
							buttonSize='btn--infinite'
							disabled={false}
						>
							Submit
						</Button>
					</Form>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

Core.propTypes = {
	children: PropTypes.node
};

export default Core;
