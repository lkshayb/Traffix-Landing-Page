import "./product.css";
import {  } from 'lucide-react';

const Product = (() => {
    return (

        <section id="product" className="product">
            <div className="container">
                <div className="product-title">
                    <h2>Product Overview</h2>
                    <p>Three core components working together to revolutionize urban traffic management</p>
                </div>
                <div className="product-grid">
                    <div className="product-card">
                        <div className="product-icon">
                            {/* <svg width="60" height="60" viewBox="0 0 64 64">
                                <rect width="60" height="60" rx="12" fill="#59e397" />
                                <g>
                                    <rect x="14" y="19" width="20" height="12" rx="3" fill="#1b2e21" />
                                    <circle cx="24" cy="25" r="4" fill="#59e397" />
                                    <rect x="26" y="20" width="3" height="3" rx="1" fill="#59e397" />
                                    <rect x="17" y="17" width="6" height="3" rx="1.5" fill="#1b2e21" />
                                </g>
                            </svg> */}
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA5B6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera-icon lucide-camera"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>
                        </div>
                        <h4>CCTV Integration</h4>
                        <p>
                            Seamless integration with existing traffic cameras for real-time data collection and analysis.
                        </p>
                    </div>
                    <div className="product-card">
                        <div className="product-icon">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD93D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-icon lucide-brain"><path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/></svg>
                        </div>
                        <h4>AI Engine</h4>
                        <p>
                            Advanced machine learning algorithms that adapt to traffic patterns and optimize signal timing.
                        </p>
                    </div>
                    <div className="product-card">
                        <div className="product-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8FA31E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-icon lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                        </div>
                        <h4>Authority Dashboard</h4>
                        <p>
                            Comprehensive control center for traffic authorities with real-time monitoring and analytics.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
})

export default Product;