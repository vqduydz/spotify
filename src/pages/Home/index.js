import classNames from 'classnames/bind';

import styles from './Home.module.scss';

import Tracks from '~/components/Layouts/components/childComponent/Tracks';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('tracks')}>
            <div className={cx('title')}>Tracks</div>
            <Tracks />
        </div>
    );
}

export default Home;
