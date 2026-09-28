import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

const helpData = {
  lock: {
  title: "How to use the lock",
  icon: "🔒",
  description: "Learn how to lock and unlock your bike.",

  videos: [
    {
      title:( <>"How to lock your bike type (<strong>Velo7/ LEV/ UCLL</strong>)"</>),
      src: "/videos/lock1.mp4",
    },
    {
      title: (<>"How to lock your bike type (<strong>Second Hand bike</strong>)"</>),
      src: "/videos/lock2.mp4",
    },
  ],

 
},

  gears: {
    title: "How to use the break",
    icon: "⚙️",
    video: "/videos/break.mp4",
    description: "Learn how to use the break correctly.",
    
  },

  lights: {
    title: "How to use the lights",
    icon: "💡",
    video: "/videos/lights.mp4",
    description: "Learn how to turn the bike lights on and off.",
    
  },

  battery: {
    title: "How to use the battery",
    icon: "🔋",
    video: "/videos/battery.mp4",
    description: "Learn how to use and charge the battery.",
    
  },
};

function Home() {
  return (
    <main className="home">
      <div className="container">
        <div className="logotitle"><img src="logo.jpg" alt="logotitle" /></div>

        <h1>Bike Help</h1>

        <p className="intro">
          Choose which thing like to know about:
        </p>

        <div className="help-grid">
          {Object.entries(helpData).map(([id, item]) => (
            <Link key={id} to={`/help/${id}`} className="help-card">
              <div className="card-icon">{item.icon}</div>

              <h2>{item.title}</h2>

              <span>Watch video →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

function HelpPage() {
  const { topic } = useParams();

  const item = helpData[topic];

  if (!item) {
    return (
      <main className="page">
        <div className="container">
          <h1>Page not found</h1>

          <Link to="/" className="back-button">
            ← Back
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="container">
        <Link to="/" className="back-link">
          ← Back
        </Link>

        <div className="help-content">
          <div className="page-icon">{item.icon}</div>
          
          <h1>{item.title}</h1>

          <p className="description">{item.description}</p>
           
        
  {item.videos ? (
  <div className="videos-container">
    {item.videos.map((video, index) => (
      <div className="video-section" key={index}>
        <h2>{video.title}</h2>

        <div className="video-container">
          <video
          
           muted
            playsInline
            autoPlay
            loop
            className="video"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    ))}
  </div>
) : (
  <div className="video-container">
    <video
      muted
      playsInline
      autoPlay
      loop
      className="video"
    >
      <source src={item.video} type="video/mp4" />
      Your browser does not support video playback.
    </video>
  </div>
)}

          {/* <section className="steps">
            <h2>How does it work?</h2>

            <ol>
              {item.steps.map((step, index) => (
                <li key={index}>
                  <span className="step-number">{index + 1}</span>

                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section> */}

          <Link to="/" className="back-button">
            ← Back to Bike Help
          </Link>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/help/:topic" element={<HelpPage />} />
    </Routes>
  );
}

export default App;