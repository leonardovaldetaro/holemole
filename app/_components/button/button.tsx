import Styles from './Button.module.scss';

interface buttonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
};

export default function Button ({ onClick, children }: buttonProps) {
    return(
        <button
            onClick={onClick}
            className={Styles.button}
        >
            {children}
        </button>
    );
}