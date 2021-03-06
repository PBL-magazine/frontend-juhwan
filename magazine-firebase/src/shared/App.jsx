import React from 'react';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import styled from 'styled-components';

import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PostWrite from '../pages/PostWrite';
import PostDetail from '../pages/PostDetail';
import Notification from '../pages/Notification';

import Header from '../components/Header';
import { Grid, Button } from '../elements';
import Permit from './Permit';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

import { apiKey } from './firebase';

import ScrollToTop from './ScrollTop';
import CreateIcon from '@mui/icons-material/Create';
import { ReactComponent as Vally } from '../assets/Vally.svg';

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Vally />
      <LayoutOuter
        maxwidth='400px'
        margin='0 auto'
        bg='#fff'
        border='0.7px solid #ddd'
        style={{ minHeight: '100vh' }}
      >
        <Header></Header>
        <ConnectedRouter history={history}>
          <ScrollToTop />
          <Route path='/' exact component={PostList} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/write' exact component={PostWrite} />
          <Route path='/write/:id' exact component={PostWrite} />
          <Route path='/post/:id' exact component={PostDetail} />
          <Route path='/noti' exact component={Notification} />
        </ConnectedRouter>
      </LayoutOuter>
      <Permit>
        <Button
          is_float
          _onClick={() => {
            history.push('/write');
          }}
        >
          <CreateIcon />
        </Button>
      </Permit>
    </React.Fragment>
  );
}

const LayoutOuter = styled.div`
  min-height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  border: 0.7px solid #ddd;
`;

export default App;
