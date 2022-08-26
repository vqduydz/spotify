import classNames from 'classnames/bind';

import styles from './Tracks.module.scss';

const cx = classNames.bind(styles);

function TrackItems({ data, className }) {
    return (
        <div className={cx('track-item')}>
            <div className={cx('track-image')}>
                <div className={cx('image')}>
                    <img className={cx('thubm')} src={data.thubm} alt={data.name} />
                </div>
                <div className={cx('play')}></div>
            </div>
            <div className={cx('track-desc')}>
                <div className={cx('name')}>
                    <p>{data.name}</p>
                </div>
                <p className={cx('artists')}>{data.artists}</p>
            </div>
            <hr />
        </div>
    );
}

export default TrackItems;
