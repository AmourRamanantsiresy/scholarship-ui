import {Layout, Row, Col, Typography, Avatar, Divider, Button, Space} from "antd";
import {FC} from "react";
// @ts-ignore
import image from "../../assets/bg1.jpg";
import {Divisor} from "../../Common/Shape"
import {yellow} from "@ant-design/colors";

const {Header, Content, Footer} = Layout;
const {Title, Text} = Typography;

const Landing: FC = () => {
    return (
        <Layout>
            <Content>
                <Row className="full bg-light" align="middle">
                    <Col span={3}></Col>
                    <Col span={8}>
                        <Space direction="vertical" size="large">
                            <Content>
                                <Row align="middle">
                                    <Title className="wait-1 fs-title toRight">Scholarship</Title>
                                    <Divisor className="wait-2 toBottom"/>
                                    <Text className="wait-2 toLeft">for everyone</Text>
                                </Row>
                                <Text className="toTop wait-3">
                                    Do you wanna study in another country?
                                </Text>
                            </Content>
                            <Space size="large">
                                <Button style={{background: yellow[3]}} className="toRight wait-4" type="primary" size="large" shape="round">
                                    Get Started
                                </Button>
                                <Button className="toRight wait-4" type="primary" size="large" shape="round">
                                    More about us
                                </Button>
                            </Space>
                        </Space>
                    </Col>
                    <Col>
                        <img className="wait-2 toLeft half" src={image} alt=""/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default Landing;