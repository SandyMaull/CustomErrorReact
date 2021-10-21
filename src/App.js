// import HomePage from './pages/Home/index'
// import CertificateDownload from './pages/Certificate/CertificateDownload'
// import './index.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import E400 from './pages/E400';
import E401 from './pages/E401';
import E403 from './pages/E403';
import E404 from './pages/E404';
import E405 from './pages/E405';
import E500 from './pages/E500';
import E502 from './pages/E502';
import E503 from './pages/E503';
import E504 from './pages/E504';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/400' component={E400} />
        <Route path='/401' component={E401} />
        <Route path='/403' component={E403} />
        <Route path='/404' component={E404} />
        <Route path='/405' component={E405} />
        <Route path='/500' component={E500} />
        <Route path='/502' component={E502} />
        <Route path='/503' component={E503} />
        <Route path='/504' component={E504} />
        <Route path='*' component={E404} />
      </Switch>
    </Router>
  )
}

export default App;
