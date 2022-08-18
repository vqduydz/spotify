import styles from './Home.module.scss';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import InterlockingPoppers from '~/components/Popper/InterlockingPoppers';
import { ReactComponent as Linkto } from '~/assets/img/linktoIcon.svg';

const cx = classNames.bind(styles);

const CONTENT = [
    {
        icon: <Linkto />,
        title: 'Premium',
    },
    {
        icon: <Linkto />,
        title: 'Support',
    },
    {
        icon: <Linkto />,
        title: 'Download',
    },
];

function Home() {
    return (
        <InterlockingPoppers content={CONTENT} className={cx('sub-action-bar')}>
            <div className={cx('sub-action-bar')}>
                <Button className={cx('bar-btn')}>{<FontAwesomeIcon icon={faBars} />}</Button>
            </div>
        </InterlockingPoppers>
    );
}

export default Home;
