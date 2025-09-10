import "./features.css";
import heatmap from "../assets/heatmap.jpg";
import signal from "../assets/signal.jpg";

// const Features = (() => {
//     return (
        // <section className="feat-container">
        //     <div className="container">

        //         <div className="features-grid">

        //                 <div className="feature-icon">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="24"
        //                         height="24"
        //                         viewBox="0 0 24 24"
        //                         fill="none"
        //                         stroke="currentColor"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                     >
        //                         <path d="M10.61 15.192c.492-1.332.99-2.671 1.388-3.992.399-1.32.79-2.634 1.39-3.992M15.822 6.208c.553.44.553 1.157 0 1.596-.553.44-1.45.44-2.003 0-.553-.44-.553-1.156 0-1.596.553-.44 1.45-.44 2.003 0zM9.03 16.792c.553.44.553 1.156 0 1.596-.553.44-1.45.44-2.003 0-.553-.44-.553-1.157 0-1.596.553-.44 1.45-.44 2.003 0zM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        //                     </svg>
        //                 </div>
        //                 <h4>Real-Time Analytics</h4>
        //                 <p>
        //                     Monitor live traffic flow, count vehicles, and measure speed with
        //                     unparalleled accuracy from any CCTV stream.
        //                 </p>
        //             </div>
        //             <div className="feature-card">
        //                 <div className="feature-icon">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="24"
        //                         height="24"
        //                         viewBox="0 0 24 24"
        //                         fill="none"
        //                         stroke="currentColor"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                     >
        //                         <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        //                         <circle cx="12" cy="12" r="3" />
        //                     </svg>
        //                 </div>
        //                 <h4>AI-Powered Signal Control</h4>
        //                 <p>
        //                     Dynamically adjust signal timings based on real-time vehicle
        //                     density, minimizing congestion and wait times.
        //                 </p>
        //             </div>
        //             <div className="feature-card">
        //                 <div className="feature-icon">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="24"
        //                         height="24"
        //                         viewBox="0 0 24 24"
        //                         fill="none"
        //                         stroke="currentColor"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                     >
        //                         <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        //                         <path d="M22 12A10 10 0 0 0 12 2v10z" />
        //                     </svg>
        //                 </div>
        //                 <h4>Traffic Density Heatmaps</h4>
        //                 <p>
        //                     Visualize traffic patterns and identify congestion hotspots across
        //                     the city with intuitive, color-coded heatmaps.
        //                 </p>
        //             </div>
        //             <div className="feature-card">
        //                 <div className="feature-icon">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="24"
        //                         height="24"
        //                         viewBox="0 0 24 24"
        //                         fill="none"
        //                         stroke="currentColor"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                     >
        //                         <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        //                         <circle cx="12" cy="12" r="3" />
        //                     </svg>
        //                 </div>
        //                 <h4>Comprehensive Reporting</h4>
        //                 <p>
        //                     Generate detailed reports on traffic volume and junction performance
        //                     to make data-driven infrastructure decisions.
        //                 </p>
        //             </div>
        //         </div>

        // </section>
        

export default function Features() {
        return (
            <section id ="features" className="features-section">
                <div className="features-images">
                    <img
                        src={heatmap}
                        alt="Team of Gardeners"
                        className="features-image main-image"
                    />
                    <img
                        src={signal}
                        alt="Gardener working"
                        className="features-image overlay-image"
                    />
                </div>
                <div className="features-content">
                    <span className="features-label">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
                            <path d="M2 8h12M8 2v12" />
                        </svg>
                        FEATURES
                    </span>
                    <h2 className="features-title">
                        Powerful Features<br />
                    </h2>
                    <p className="features-description">
                        Advanced capabilities designed to optimize every aspect of urban traffic flow.
                    </p>
                    <ul className="features-list">
                        <li>
                            <span className="features-icon analytics"></span>
                            <b>Real-Time Analytics</b>
                        </li>
                        <p>Monitor live traffic flow, count vehicles, and measure speed with unparalleled accuracy from any CCTV stream.</p>
                        <li>
                            <span className="features-icon signal"></span>
                            <b>AI-Powered Signal Control</b>
                        </li>
                        <p>Dynamically adjust signal timings based on real-time vehicle density, minimizing congestion and wait times.</p>
                        <li>
                            <span className="features-icon heatmaps"></span>
                            <b>Traffic Density Heatmaps</b>
                        </li>
                        <p>Visualize traffic patterns and identify congestion hotspots across the city with intuitive, color-coded heatmaps.</p>
                        <li>
                            <span className="features-icon comprehensive"></span>
                            <b>Comprehensive Reporting</b>
                        </li>
                        <p>Generate detailed reports on traffic volume and junction performance to make data-driven infrastructure decisions.</p>
                    </ul>
                    
                </div>
            </section>
        );
    }


    

// export default Features;