import styles from './Header.module.scss';

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
                                    <div className={cx('icon')}>
                                        <div className={cx('icon-container')}>
                                            <div className={cx('search-icon')}>
                                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                            </div>
                                            <button className={cx('clear')}>
                                                <FontAwesomeIcon icon={faXmark} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('actions')}>
                            <h4>Actions</h4>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
