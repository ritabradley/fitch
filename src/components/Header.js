import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='navbar is-dark is-bold'>
            <div className='navbar-brand is-marginless'>
                <div className='navbar-item'>
                    <Link className='has-text-white has-text-weight-bold is-size-3' to='/'>
                        <FontAwesomeIcon style={{ color: '#E1459F' }} icon={faStream} />
                        &nbsp;FITCH
                    </Link>
                </div>
            </div>
            <div className='navbar-end'>
                <div className='navbar-item'>
                    <Link className='has-text-white' to='/'>
                        All Streams
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
