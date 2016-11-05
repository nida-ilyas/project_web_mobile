import React from 'react';
import { render } from 'react-dom';
//import Hello from './src/hello.jsx';
import Dashboard from './app/components/DashboardComponent';
import {Post} from './app/components/DashboardComponent';


//render(<Dashboard />,  document.getElementById('container'));
render(<Post data={data}/> , document.getElementById('container')) ;
//render(<Hello />,  document.getElementById('container'));