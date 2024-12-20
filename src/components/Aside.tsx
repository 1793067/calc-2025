import 'bootstrap/dist/css/bootstrap.min.css';

import ListGroup from 'react-bootstrap/ListGroup';

function LinkedExample() {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" disabled>
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
        This one is a button
      </ListGroup.Item>
    </ListGroup>
  );
}

interface AsideProps {
  style?: React.CSSProperties;
}

const Aside: React.FC<AsideProps> = ({ style }) => {
  return (
    <div className="Aside bg-dark p-2" style={{ ...style }}>
      <LinkedExample />
    </div>
  );
};

export default Aside;
