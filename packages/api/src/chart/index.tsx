import React from 'react';

import './style.less';

interface IProps {
    title: string;
}
const ChartDemo = ({ title }: IProps) => {
    return (
        <div className={'title'}>
            标题： {title}
            <div>描述内容</div>
        </div>
    );
};
export default ChartDemo;
