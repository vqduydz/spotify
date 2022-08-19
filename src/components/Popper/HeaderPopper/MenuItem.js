import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './HeaderPopper.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button text className={cx('content')} rightIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
