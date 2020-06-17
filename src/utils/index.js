/**
 * Capitalise strings
 * @param {*} str 
 */
export const capitalized = str => str.toUpperCase();

/**
 * Validation
 */
export const validationEmail = value => {
	if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value) === true) {
		return true;
	}

	return false;
};

/**
 * Empty Field validation
 * @param {*} value 
 */
export const emptyField = str => (str.length > 0 ? false : true);
