import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom'

render (
<Router>
    <App/>
</Router>
, document.getElementById('app'))
