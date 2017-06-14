import React, { PropTypes } from 'react';
import className from 'classnames';

const Button = props => {
    
        const cssclasses = className('Button', props.className);
        return props.href
        ? <a {...props} className={cssclasses} />
        : <button {...props} className={cssclasses} />;    
};

Button.PropTypes = {
    href: PropTypes.string
};

export default Button;