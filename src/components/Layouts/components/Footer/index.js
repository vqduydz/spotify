import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('now-playing')}>
                <div className={cx('container')}>
                    <div className={cx('widget')}>
                        <h3>widget</h3>
                    </div>
                    <div className={cx('controls')}>
                        <h3>controls</h3>
                    </div>
                    <div className={cx('more-controls')}>
                        <h3>more-controls</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
