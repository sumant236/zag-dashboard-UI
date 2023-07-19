import { Inter } from "next/font/google";
import { Col, Row } from "antd";
import LeftDrawer from "./components/layout/LeftDrawer";
import Dashboard from "./components/layout/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // layout of the page
    <Row>
      {/* left navbar of the page */}
      <Col span={5}>
        <LeftDrawer />
      </Col>
      {/* dashboard of the page */}
      <Col span={19}>
        <Dashboard />
      </Col>
    </Row>
  );
}
