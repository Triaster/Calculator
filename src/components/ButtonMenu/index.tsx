import { Button } from 'antd';

type ButtonMenuProps = {
        onClick: () => void;
};

const ButtonMenu: React.FC<ButtonMenuProps> = (props: ButtonMenuProps) => (
        <Button {...props} >Add tab</Button>
);

export default ButtonMenu;