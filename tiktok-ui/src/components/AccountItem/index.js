import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/8a8358945ae06cf4446f40a62e7a81be~c5_300x300.webp?x-expires=1652378400&x-signature=FXs%2FrKYbzXS20QKsFpzisXvJwD8%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hồng Thái</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>hongthai</span>
            </div>
        </div>
    );
}

export default AccountItem;
