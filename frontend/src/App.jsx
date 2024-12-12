import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-primary-cream dark:bg-primary-dark">
          <Navbar />
          {/* Your routes go here */}
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App; 