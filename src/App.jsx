import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import QuestionsPage from './pages/QuestionsPage'
import ProjectsPage from './pages/ProjectsPage'
import TopicsPage from './pages/TopicsPage'
import './App.css'

function App() {
    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/questions" element={<QuestionsPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/topics" element={<TopicsPage />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
