import styles from './HeaderSearch.module.scss';
import Button from '~/components/Button';
import images from '~/assets/img';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import HeaderPopper from '~/components/Popper/HeaderPopper';
import { ReactComponent as Linkto } from '~/assets/img/linktoIcon.svg';
import { ReactComponent as UserIcon } from '~/assets/img/user.svg';
import Search from '../childComponent/Search';

const cx = classNames.bind(styles);

let currentUser = true;

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

function HeaderSearch() {
    const USER_content = [
        {
            icon: <Linkto />,
            title: 'Account',
            // to: '/account',
        },
        {
            title: 'Profile',
            // to: '/profile',
        },
        ...CONTENT,

        {
            title: 'Settings',
            // to: '/Settings',
        },
        {
            title: 'Log out',
            separate: true,
        },
    ];
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

                        <Search />

                        <div className={cx('actions')}>
                            {currentUser ? (
                                <div className="user-action">
                                    <Button outline scale to={'/premium'} className={cx('user-action-btn')}>
                                        Upgrade
                                    </Button>
                                    <HeaderPopper content={USER_content} className={cx('user-content-popper')}>
                                        <button className={cx('user-btn')}>
                                            <div className={cx('user-box')}>
                                                <UserIcon />
                                            </div>
                                            <span className={cx('user-name')}>Duy Vu</span>
                                            {<FontAwesomeIcon icon={faAngleDown} />}
                                        </button>
                                    </HeaderPopper>
                                </div>
                            ) : (
                                <>
                                    <div className={cx('sub-action')}>
                                        <Button text scale to={'/premium'} className={cx('header-btn')}>
                                            Premium
                                        </Button>
                                        <Button text scale to={'/support'} className={cx('header-btn')}>
                                            Support
                                        </Button>
                                        <Button text scale to={'/download'} className={cx('header-btn')}>
                                            Download
                                        </Button>
                                    </div>

                                    <span className={cx('spboder')}></span>

                                    <div className={cx('main-action')}>
                                        <Button text scale to={'/signup'} className={cx('header-btn')}>
                                            Sign up
                                        </Button>
                                        <Button primary scale to={'/login'} className={cx('header-btn')}>
                                            Log in
                                        </Button>
                                    </div>
                                    <HeaderPopper content={CONTENT}>
                                        <div className={cx('sub-action-bar')}>
                                            <Button className={cx('bar-btn')}>
                                                {<FontAwesomeIcon icon={faBars} />}
                                            </Button>
                                        </div>
                                    </HeaderPopper>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderSearch;
