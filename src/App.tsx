import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import Split from 'react-split';

import Aside from './components/Aside';
import Main from './components/Main';
import Navibar from './components/Navibar';

function App() {
  return (
    <div className="link-danger">
      <Navibar />
      <div>
        <Split
          sizes={[25, 75]}
          minSize={100}
          expandToMin={false}
          gutterSize={3}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
          style={{ display: 'flex', height: '100vh' }}
        >
          <Aside
            style={
              {
                /*additional styles*/
              }
            }
          />
          <Main
            style={
              {
                /*additional styles*/
              }
            }
          />
        </Split>
      </div>
    </div>
  );
}

export default App;
