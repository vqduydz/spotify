import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('backgroud')}></div>
            <div className={cx('content')}>
                <h2> Header</h2>
            </div>
        </header>
    );
}

export default Header;
