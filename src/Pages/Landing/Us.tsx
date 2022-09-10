import {FC, useContext} from "react";
import {Col, Row} from "antd";
import {Typography, Layout} from "antd";
import image from '../../assets/bg2.jpg';
import {APP_CONTEXT} from "../../Provider/Context/context";

const {Title} = Typography;
const {Content} = Layout;


const Us: FC = () => {
    //get Context
    const context = useContext(APP_CONTEXT);
    const $ = (className: string) => context.scrollHandling[0] === 1 ? className : 'op-0';

    return (
        <Row id="second-page" justify="space-around" className="bg-light full flex-center">
            <Col span={12}>
                <img src={image} className="half-inline" alt=""/>
            </Col>
            <Col span={11}>
                <Row align="middle" justify="space-around">
                    <Title className={$('toLeft')}>We are a help</Title>
                    <Title className={$('toRight wait-2')}>We are a hand given</Title>
                    <Title className={$('toLeft wait-3')}>We are your opportunity</Title>
                </Row>
            </Col>
        </Row>
    );
}

export default Us;