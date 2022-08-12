import classNames from 'classnames/bind';
import images from '~/assets/img';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('container')}>
                <button className={cx('logo')}>
                    <img src={images.logo} alt="Spotify" />
                </button>
                <h1> Sidebar content</h1>
            </div>
        </aside>
    );
}
export default Sidebar;
