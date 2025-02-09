import { Children } from 'react';
import Styles from './Button.module.scss';

interface buttonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
};

export default function Button ({ onClick, children, className }: buttonProps) {
    return(
        <button
            onClick={onClick}
            className={Styles.button}
        >
            {children}
        </button>
    );
}