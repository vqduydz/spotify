import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper/';
import styles from './InterlockingPoppers.module.scss';
// import Button from '~/components/Button';
// import { ReactComponent as Linkto } from '~/assets/img/linktoIcon.svg';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function InterlockingPoppers({ children, content = [] }) {
    const renderContent = () => {
        return content.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive // cho phép tương tác
            trigger="click"
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('popper')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('container')}>{renderContent()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default InterlockingPoppers;
