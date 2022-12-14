import classNames from 'classnames/bind';
import images from '~/assets/img';
import Button from '~/components/Button';
import styles from './Sidebar.module.scss';
import { ReactComponent as HomeIcon } from '~/assets/img/homeIcon.svg';
import { ReactComponent as SearchIcon } from '~/assets/img/searchIcon.svg';
import { ReactComponent as LibraryIcon } from '~/assets/img/libraryIcon.svg';
import { ReactComponent as AddIcon } from '~/assets/img/addicon.svg';

import SidebarPopper from '~/components/Popper/SidebarPopper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

let currentUser = true;

const LIBRARY_POPPER = [
    {
        title: 'Enjoy Your Library',
        text: 'Log in to see saved songs, podcasts, artists, and playlists in Your Library.',
    },
];
const CREATE_PLAYLIST_POPPER = [
    {
        title: 'Create a playlist',
        text: 'Log in to create and share playlists..',
    },
];
const LIKED_SONGS_POPPER = [
    {
        title: 'Enjoy your Liked Songs',
        text: 'Log in to see all the songs you’ve liked in one easy playlist.',
    },
];

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            {/* <div className={cx('background')}></div> */}
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Button className={cx('logo')} href="/">
                        <img src={images.logo} alt="Spotify" />
                    </Button>
                    <div className={cx('top-sidebar')}>
                        <Button text className={cx('sidebar-btn')} to="/" leftIcon={<HomeIcon />}>
                            Home
                        </Button>

                        <Button text className={cx('sidebar-btn')} to="/search" leftIcon={<SearchIcon />}>
                            Search
                        </Button>

                        {currentUser ? (
                            <div>
                                <Button to="/yourlibrary" text className={cx('sidebar-btn')} leftIcon={<LibraryIcon />}>
                                    Your Library
                                </Button>
                            </div>
                        ) : (
                            <SidebarPopper content={LIBRARY_POPPER}>
                                <div>
                                    <Button text className={cx('sidebar-btn')} leftIcon={<LibraryIcon />}>
                                        Your Library
                                    </Button>
                                </div>
                            </SidebarPopper>
                        )}
                    </div>
                    <div className={cx('middle-sidebar')}>
                        {currentUser ? (
                            <>
                                <div>
                                    <Button
                                        to="createplaylist"
                                        text
                                        className={cx('sidebar-btn')}
                                        leftIcon={<AddIcon />}
                                    >
                                        Create Playlist
                                    </Button>
                                </div>

                                <div>
                                    <Button
                                        to="/likedsongs"
                                        text
                                        className={cx('sidebar-btn')}
                                        leftIcon={<FontAwesomeIcon icon={faHeart} />}
                                    >
                                        Liked Songs
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <SidebarPopper content={CREATE_PLAYLIST_POPPER}>
                                    <div>
                                        <Button text className={cx('sidebar-btn')} leftIcon={<AddIcon />}>
                                            Create Playlist
                                        </Button>
                                    </div>
                                </SidebarPopper>
                                <SidebarPopper content={LIKED_SONGS_POPPER}>
                                    <div>
                                        <Button
                                            text
                                            className={cx('sidebar-btn')}
                                            leftIcon={<FontAwesomeIcon icon={faHeart} />}
                                        >
                                            Liked Songs
                                        </Button>
                                    </div>
                                </SidebarPopper>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
}
export default Sidebar;
