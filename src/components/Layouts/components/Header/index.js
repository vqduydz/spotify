import styles from './Header.module.scss';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-containter')}>
                <div className={cx('backgroud')}></div>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('directional')}>
                            <button className={cx('back-btn')}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>

                            <button className={cx('forward-btn')}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>
                        <div className={cx('search')}>
                            <div className={cx('search-container')}>
                                <div className={cx('search-content')}>
                                    <input placeholder="Artists, songs or podcasts" spellCheck={false} />
                                    <div className={cx('search-icon')}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </div>
                                    <button className={cx('clear')}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('actions')}>
                            <Button onlyText>Premium</Button>
                            <Button onlyText>Support</Button>
                            <Button onlyText>Download</Button>
                            <span className={cx('spboder')}></span>
                            <Button onlyText className={cx('signup')}>
                                Sign up
                            </Button>
                            <Button primary to="/login">
                                Log in
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
