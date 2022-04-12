import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

import './App.css';

import Dashboard from './containers/Dashboard';

import MenuBar from './components/MenuBar';
import ToolBar from './components/ToolBar';



const Main = () => {
  return (
    <div>

        <ToolBar />
        <MenuBar />
        <Dashboard />



    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
