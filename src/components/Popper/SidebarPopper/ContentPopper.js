import classNames from 'classnames/bind';
// import Button from '~/components/Button';
import styles from './SidebarPopper.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ContentPopper({ data }) {
    return (
        <div className={cx('content')}>
            <div className={cx('title')}>
                <h2>{data.title}</h2>
            </div>
            <p className={cx('text')}>{data.text}</p>
            <div className={cx('action')}>
                <Button text scale className={cx('not-now')}>
                    Not now
                </Button>
                <Button primary scale className={cx('log-in')} to="/login">
                    Log in
                </Button>
            </div>
        </div>
    );
}

export default ContentPopper;
