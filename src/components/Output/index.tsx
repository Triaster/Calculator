import { InputNumber } from 'antd';

type OutputProps = {
    input: string;
}

export default function Output({input}: OutputProps) {

    return (
        <InputNumber
            autoFocus={true}
            controls={false}
            readOnly={true}
            style={{ width: '100%', height: '65px', fontSize: '42px' }}
            value={input || 0}
        />
    )
}