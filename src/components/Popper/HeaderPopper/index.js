import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper/';
import styles from './HeaderPopper.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function HeaderPopper({ children, content = [] }) {
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

export default HeaderPopper;
