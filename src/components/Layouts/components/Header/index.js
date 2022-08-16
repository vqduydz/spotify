import styles from './Header.module.scss';
import Button from '~/components/Button';
import images from '~/assets/img';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { ReactComponent as Linkto } from '~/assets/img/linktoIcon.svg';

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

                            <Tippy
                                interactive // cho phép tương tác
                                trigger="click"
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div className={cx('sub-action-bar-container')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <Button text rightIcon={<Linkto />} className={cx('header-btn')}>
                                                Premium
                                            </Button>
                                            <Button text rightIcon={<Linkto />} className={cx('header-btn')}>
                                                Support
                                            </Button>
                                            <Button text rightIcon={<Linkto />} className={cx('header-btn')}>
                                                Download
                                            </Button>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div className={cx('sub-action-bar')}>
                                    <Button className={cx('bar-btn')}>{<FontAwesomeIcon icon={faBars} />}</Button>
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
