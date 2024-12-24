import React from 'react';
import { GithubIcon, CloudIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <GithubIcon className="w-8 h-8 text-gray-800" />
          <span className="text-gray-400 text-2xl">→</span>
          <CloudIcon className="w-8 h-8 text-blue-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Azure Static Web App Test
        </h1>
        
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <p className="text-green-700 font-medium">Deployment Successful</p>
            </div>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">Environment Info</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <span className="font-medium">React Version:</span> {React.version}
              </li>
              <li>
                <span className="font-medium">Environment:</span> {import.meta.env.MODE}
              </li>
              <li>
                <span className="font-medium">Build Time:</span> {new Date().toLocaleString()}
              </li>
            </ul>
          </div>
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-6">
          Ready for GitHub Actions deployment testing
        </p>
      </div>
    </div>
  );
}

export default App;