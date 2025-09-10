// import { Button } from './ui/button';
import { PenTool, Scissors, Building, Flower, Bell, Car, TrafficCone, Siren } from 'lucide-react';
// import { ImageWithFallback } from './figma/ImageWithFallback';
import './challenges.css';

export default function Challenges() {
    const services = [
        {
            icon: TrafficCone ,
            
            problem: "Peak Hour Congestion",
            solution: "Predictive Signal Timing -> Our AI analyzes traffic flow in real-time to dynamically adjust signal phases, dissolving bottlenecks before they form and reducing average commute times.",
            color: "#EA5B6F",
        },
        {
            icon: Car,
            
            problem: "Increased Emissions",
            solution: "Minimized Vehicle Idling -> By creating a smoother traffic flow with fewer stops, AI TrafficSense directly cuts down on fuel consumption and harmful emissions from idling vehicles.",
            color: "#FFE797",
        },
        {
            icon: Siren,
            problem: "Emergency Response Delays",
            solution: "Dynamic Green Corridors -> The system can create prioritized green-light pathways for emergency vehicles, clearing traffic ahead and drastically reducing response times when seconds matter most.",
            color : "#A7E399",
        }
    ];

    return (
        <div id="challenges" className="services-container">
            <section className="services-section">
                <div className="services-content">
                    {/* Header */}
                    <div className="services-header">
                        <h1 className="services-title">
                            Solving India's Traffic Crisis
                        </h1>
                        <p className="services-sub">
                            Addressing unique challenges of Indian roads with AI-powered solutions
                        </p>
                    </div>

                    {/* Services Row */}
                    <div className="services-grid">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className="service-card"  style={{ backgroundColor: service.color }}>
                                    {/* Icon */}
                                    <div className="service-icon-container">
                                        <div className="service-icon-wrapper">
                                            <IconComponent className="service-icon" size={85}/>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="service-content">
                                        <div className="card-problem">
                                            <h4 className="problem-title">The Challenge</h4>
                                            <p className="problem-text">{service.problem}</p>
                                        </div>
                                        <div className="card-solution">
                                            <h4 className="solution-title">Our Solution</h4>
                                            <p className="solution-text">{service.solution}</p>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    {/* <div className="service-image-container">
                                        <ImageWithFallback
                                            src={service.image}
                                            alt={service.problem}
                                            className="service-image"
                                        />
                                    </div> */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}