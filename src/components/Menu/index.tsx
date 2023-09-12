import { useState } from "react";
import { Radio, Tabs } from "antd";
import ButtonMenu from "../ButtonMenu";
import { Menu } from "./style";
import Main from "../Main";

const MenuComponent: React.FC = () => {
    const [isActiveKey, setIsActiveKey] = useState<number>(0);
    const [items, setItems] = useState([
        {
            label: 'Tab-0',
            key: '0',
            children: <Main />,
        },
    ]);
    const handleDeleteTab = () => {
        if (items.length > 1) {
            const updatedItems = items.filter((item) => +item.key !== isActiveKey);
            setItems(updatedItems);
            console.log("items: ", items)
            console.log("active: ", +updatedItems[0].key)
            setIsActiveKey(+updatedItems[0].key);
        }
    };
    const handleAddTab = () => {
        if (items.length < 12) {
            const lastItem = items[items.length - 1];
            const newKey = String(+lastItem.key + 1);
            const newLabel = `Tab-${newKey}`;
            const newItem = {
                label: newLabel,
                key: newKey,
                children: lastItem.children,
            };
            setItems([...items, newItem]);
            setIsActiveKey(+newKey);
        }
    };
    return (
        <Menu>
            <Radio.Group
                style={{
                    marginBottom: 8,
                    display: 'flex',
                    justifyContent: 'center',
                    columnGap: '12px',
                }}
            >
                <Radio.Button onClick={handleDeleteTab}>Delete tab</Radio.Button>
                <ButtonMenu onClick={handleAddTab} />
            </Radio.Group>
            <Tabs
                activeKey={String(isActiveKey) || '0'}
                tabPosition="top"
                onChange={(activeKey) => setIsActiveKey(Number(activeKey))}
                items={items}
            />
        </Menu>
    );
};

export default MenuComponent;