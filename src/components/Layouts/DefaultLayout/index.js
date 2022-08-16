import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayouut({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayouut;
