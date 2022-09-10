import {Layout, Row, Typography} from "antd";
import {FC, useContext, useEffect} from "react";
import Banner from "./Banner";
import Us from "./Us";

const {Content} = Layout;
const {Title, Text} = Typography;

const Landing: FC = () => {
    return (
        <Layout>
            <Content>
                <Banner/>
                <Us/>
                <Row id="third-page" className="full flex-center">
                    <Title>This is the 3rd page</Title>
                </Row>
                <Row id="fourth-page" className="full flex-center">
                    <Title>This is the 4th page</Title>
                </Row>
            </Content>
        </Layout>
    );
}

export default Landing;