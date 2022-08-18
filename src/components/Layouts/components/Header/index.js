import styles from './Header.module.scss';
import Button from '~/components/Button';
import images from '~/assets/img';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import InterlockingPoppers from '~/components/Popper/InterlockingPoppers';
import { ReactComponent as Linkto } from '~/assets/img/linktoIcon.svg';

const cx = classNames.bind(styles);

const CONTENT = [
    {
        icon: <Linkto />,
        title: 'Premium',
        to: '/premium',
    },
    {
        icon: <Linkto />,
        title: 'Support',
        to: '/support',
    },
    {
        icon: <Linkto />,
        title: 'Download',
        to: '/download',
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-containter')}>
                <div className={cx('backgroud')}></div>

                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('directional')}>
                            <button className={cx('back-btn')}>
                                <img src={images.back} alt="" />
                            </button>
                            <button className={cx('forward-btn')}>
                                <img src={images.forward} alt="" />
                            </button>
                        </div>

                        <div className={cx('search')}>
                            <div className={cx('search-container')}>
                                <div className={cx('search-content')}>
                                    <input placeholder="Artists, songs or podcasts" spellCheck={false} />
                                    <div className={cx('search-icon')}>
                                        <img src={images.search} alt="" />
                                    </div>
                                    <button className={cx('clear')}>
                                        <img src={images.clear} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('actions')}>
                            <div className={cx('sub-action')}>
                                <Button text scale className={cx('header-btn')}>
                                    Premium
                                </Button>
                                <Button text scale className={cx('header-btn')}>
                                    Support
                                </Button>
                                <Button text scale className={cx('header-btn')}>
                                    Download
                                </Button>
                            </div>

                            <span className={cx('spboder')}></span>

                            <div className={cx('main-action')}>
                                <Button text scale className={cx('header-btn')}>
                                    Sign up
                                </Button>
                                <Button primary scale className={cx('header-btn')}>
                                    Log in
                                </Button>
                            </div>
                            <InterlockingPoppers content={CONTENT}>
                                <div className={cx('sub-action-bar')}>
                                    <Button className={cx('bar-btn')}>{<FontAwesomeIcon icon={faBars} />}</Button>
                                </div>
                            </InterlockingPoppers>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
