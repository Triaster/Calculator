import React from 'react';
import { Input } from 'antd';
import { ClearOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const MessageArea: React.FC = () => <TextArea allowClear={{clearIcon: <ClearOutlined />}} style={{resize: 'none', width: '100%'}} rows={4} />;

export default MessageArea;