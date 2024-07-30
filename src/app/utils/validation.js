const fNameRegex = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    } else if (
        /^[A-Za-z]+(?:['-][A-Za-z]+)*$/.test(value)
    ) {
        error = 'Invalid First Name';
    }
    return error;
};

const emailRegex = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(value)
    ) {
        error = 'Invalid email address';
    }
    return error;
};

const passwordRegex = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length < 8) {
        error = 'Password must be at least 8 characters';
    } else if (
        !/(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]/.test(value)
    ) {
        error = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
    return error;
};
export { fNameRegex, emailRegex, passwordRegex }