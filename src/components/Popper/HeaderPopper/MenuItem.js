import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './HeaderPopper.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const classes = cx('content', { separate: data.separate });
    return (
        <Button text className={classes} rightIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
