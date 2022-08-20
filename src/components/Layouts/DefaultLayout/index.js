import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import classNames from 'classnames/bind';
// import Header from '../components/Header';

import styles from './DefaultLayout.module.scss';
import HeaderSearch from '../components/HeaderSearch';

const cx = classNames.bind(styles);

function DefaultLayouut({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <HeaderSearch />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayouut;
