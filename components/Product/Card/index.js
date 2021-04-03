import './index.less';
import { Card, Image } from "antd";

const card = (props) => {

  const { plant } = props;

  return (
    <Card title={plant.name}>
      <div className={'product-card-content'}>
        <Image className={'product-card-content__img'} src={plant.img} alt={plant.name}></Image>
        <span>{plant.name}</span>
      </div>
    </Card>
  ) 
};

export default card;
