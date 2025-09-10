import React from 'react';
import "./technology.css";

const technology = () => {
  const technologies = [
    {
      title: 'Real-time Analytics',
      description: 'Live data processing and pattern analysis for traffic optimization.',
      tech: 'Apache Kafka, InfluxDB'
    },
    {
      title: 'Edge Computing',
      description: 'Low-latency processing at traffic intersections for instant decision making.',
      tech: 'NVIDIA Jetson, AWS IoT'
    },
    {
      title: 'IoT Integration',
      description: 'Seamless connectivity with existing traffic infrastructure and smart devices.',
      tech: 'MQTT, LoRaWAN'
    },
    {
      title: 'Computer Vision',
      description: 'Real-time image processing to detect vehicles, pedestrians, and traffic violations.',
      tech: 'OpenCV, YOLO v8'
    },
    
    {
      title: 'Predictive AI',
      description: 'Machine learning models that predict traffic congestion and optimize signal timing.',
      tech: 'Scikit-learn, XGBoost'
    },
    {
      title: 'Deep Learning',
      description: 'Advanced neural networks for real-time traffic pattern recognition and vehicle classification.',
      tech: 'TensorFlow, PyTorch'
    }
    
  ];

  return (
    
    <section id="tech" className="technology-section">
      <div className="container-tech">
        <div className="section-header">
          {/* <h2 className="section-title">Underlying Technology</h2> */}
          <p className="section-subtitle">
            Cutting-edge AI and IoT technologies powering intelligent traffic management
          </p>
        </div>
        
        <div className="technology-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="technology-card" tabIndex="0">
              <h3 className="card__title">{tech.title}</h3>
              <p className="card__description">{tech.description}</p>
              <div className="card__tech">{tech.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    
  );
};

export default technology;