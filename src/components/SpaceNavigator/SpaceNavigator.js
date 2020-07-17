import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
import { MdRedo } from "react-icons/md";
import { MdUndo } from "react-icons/md";




const cx = classNames.bind(styles);

const SpaceNavigator = ({onPrev, onNext}) => (
    <div className={cx('space-navigator')}>
        <div className={cx('left', 'end')}>
            <div className={cx('circle')} onClick={onPrev}>
                <MdUndo/>
            </div>
        </div>
        <div className={cx('right', 'end')}>
            <div className={cx('circle')} onClick={onNext}>
                <MdRedo/>
            </div>
        </div>
    </div>
);

export default SpaceNavigator;