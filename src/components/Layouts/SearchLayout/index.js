import classNames from 'classnames/bind';

import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeaderSearch from '../components/HeaderSearch';

import styles from './SearchLayout.module.scss';

const cx = classNames.bind(styles);

function SearchLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <HeaderSearch />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default SearchLayout;
