import { useState } from 'react'

import './App.css'

function App() {
  
    
    const [data, setData] = useState([
      { date: "2022-09-01", views: 100, article: "Article 1" },
      { date: "2023-09-01", views: 100, article: "Article 1" },
      { date: "2023-09-02", views: 150, article: "Article 2" },
      { date: "2023-09-02", views: 120, article: "Article 3" },
      { date: "2020-09-03", views: 200, article: "Article 4" },
    ]);
  
   
    const sortByDate = () => {
      const sortedData = [...data].sort((a, b) => {
        if (a.date === b.date) {
          return b.views - a.views;
        }
        return new Date(b.date) - new Date(a.date); 
      });
      setData(sortedData);
    };
  
    
    const sortByViews = () => {
      const sortedData = [...data].sort((a, b) => {
        if (a.views === b.views) {
          return new Date(b.date) - new Date(a.date); 
        }
        return b.views - a.views; 
      });
      setData(sortedData);
    };
  
    return (
      <div >
        <h1>Date and Views Table</h1>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
        <table style={{border: "none", borderCollapse:"collapse" }} >
          <thead>
            <tr>
              <th style={{ border: "none", padding: "10px" }}>Date</th>
              <th style={{ border: "none", padding: "10px" }}>Views</th>
              <th style={{ border: "none", padding: "10px" }}>Article</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td style={{ border: "none", padding: "10px" }}>{row.date}</td>
                <td style={{ border: "none", padding: "10px" }}>{row.views}</td>
                <td style={{ border: "none", padding: "10px" }}>{row.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default App
