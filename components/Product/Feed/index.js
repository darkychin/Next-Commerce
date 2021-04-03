// Stylings
import './index.less';

// Components
import { Row, Col, Card, Image } from "antd";
import PlantCard from "../Card";

// Plant pictures to get from
// https://www.pexels.com/search/potted%20plants%20white%20background/?size=medium
const plants = [
  { id: 1, name: 'plant 1', img: ''},
  { id: 2, name: 'plant 2', img: ''},
  { id: 3, name: 'plant 3', img: ''},
  { id: 4, name: 'plant 4', img: ''},
  { id: 5, name: 'plant 5', img: ''},
  { id: 6, name: 'plant 6', img: ''},
]

const feed = () => (
    <Row gutter={[40,50]}>
      {
        plants.map((plant) => (
          <Col key={plant.id} span={8}>
            <PlantCard plant={plant} />
          </Col>
        ))
      }
    </Row>
);

export default feed;