import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper/';
import styles from './SidebarPopper.module.scss';
import ContentPopper from './ContentPopper';

const cx = classNames.bind(styles);

function SidebarPopper({ children, content = [] }) {
    const renderContent = () => {
        return content.map((item, index) => <ContentPopper key={index} data={item} />);
    };

    const classes = cx(
        'popper',
        //add clasaname for tippy
    );
    return (
        <Tippy
            interactive // cho phép tương tác
            trigger="click"
            placement="right-start"
            render={(attrs) => (
                <div className={classes} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('popper-container')}>{renderContent()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default SidebarPopper;
