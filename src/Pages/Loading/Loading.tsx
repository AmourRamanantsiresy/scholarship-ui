import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';


const SpinIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />

const Loading = () => (
    <div className="full flex-center">
        <Spin size="large" />
    </div>
);

export default Loading;