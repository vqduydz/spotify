import classNames from 'classnames/bind';
import images from '~/assets/img';
import Button from '~/components/Button';
import styles from './Sidebar.module.scss';
import { ReactComponent as HomeIcon } from '~/assets/img/homeIcon.svg';
import { ReactComponent as SearchIcon } from '~/assets/img/searchIcon.svg';
import { ReactComponent as LibraryIcon } from '~/assets/img/libraryIcon.svg';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('background')}></div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Button className={cx('logo')} href="/">
                        <img src={images.logo} alt="Spotify" />
                    </Button>
                    <div>
                        <Button text className={cx('sidebar-btn')} to="/" leftIcon={<HomeIcon />}>
                            Home
                        </Button>
                        <Button text className={cx('sidebar-btn')} to="/search" leftIcon={<SearchIcon />}>
                            Search
                        </Button>
                        <Button text className={cx('sidebar-btn')} leftIcon={<LibraryIcon />}>
                            Your Library
                        </Button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
export default Sidebar;
