import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

import PostPosition from './pages/PostPosition';
import PostsPosition from './pages/PostsPosition';
import WritePosition from './pages/WritePosition';

//const SummaryPage = React.lazy(() => import('pages/Summary/SummaryPage'));
const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));
const RootRedirect = () => <Redirect to="/posts" />;
const NotFoundRedirect = () => <Redirect to="/not-found" />;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <LayoutRoute
            exact
            path="/login"
            layout={EmptyLayout}
            component={props => <AuthPage {...props} authState={STATE_LOGIN} />}
          />
          <LayoutRoute
            exact
            path="/signup"
            layout={EmptyLayout}
            component={props => (
              <AuthPage {...props} authState={STATE_SIGNUP} />
            )}
          />

          <MainLayout breakpoint={this.props.breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <Switch>
                <Route exact path="/" component={RootRedirect} />
                <Route exact path="/write" component={WritePosition} />
                <Route exact path="/post" component={PostPosition} />
                <Route exact path="/posts" component={PostsPosition} />

                <Route exact path="/not-found" component={NotFoundPage} />
                <Route exact component={NotFoundRedirect} />
              </Switch>
            </React.Suspense>
          </MainLayout>
        </Switch>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
