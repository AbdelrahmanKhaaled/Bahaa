import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Topics from './pages/Topics';
import TopicsGuide from './pages/TopicsGuide';
import TopicsGame from './pages/TopicsGame';
import WhyChooseUs from './pages/WhyChooseUs';
import AISupporterConversation from './pages/AISupporterConversation';
import AISupporterVoice from './pages/AISupporterVoice';
import AISupporter from './components/home/AISupporter';
import TopicsNoData from './pages/TopicsNoData';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/*"
          element={
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/topics" element={<Topics />} />
                  <Route path="/topics/guide" element={<TopicsGuide />} />
                  <Route path="/topics/game" element={<TopicsGame />} />
                  <Route path="/topics/nodata" element={<TopicsNoData />} />
                  <Route path="/why-choose-us" element={<WhyChooseUs />} />
                  <Route path="/ai-supporter" element={<AISupporter />} />
                  <Route path="/ai-supporter/conversation" element={<AISupporterConversation />} />
                  <Route path="/ai-supporter/voice" element={<AISupporterVoice />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
