import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className='navbar is-dark is-bold'>
            <div className='navbar-brand is-marginless'>
                <div className='navbar-item'>
                    <Link className='has-text-white has-text-weight-bold is-size-3' to='/'>
                        <FontAwesomeIcon style={{ color: '#E1459F' }} icon='stream' />
                        &nbsp;FITCH
                    </Link>
                </div>
            </div>
            <div className='navbar-end'>
                <div className='navbar-item'>
                    <div className='field is-grouped is-grouped-multiline'>
                        <Link style={{ marginRight: '1rem' }} className='has-text-white is-size-5' to='/'>
                            All Streams
                        </Link>
                        <GoogleAuth />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
