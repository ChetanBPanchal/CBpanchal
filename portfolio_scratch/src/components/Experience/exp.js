import React from "react";
import "./exp.css";
import { useCollapse } from "react-collapsed";
import { useState } from "react";


const Exp = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [exp1,setBlock1Visible] = useState(true)
    const [exp2,setBlock2Visible] = useState(false)
    const [exp3,setBlock3Visible] = useState(false)
    const [headerStyle, setStyle] = useState("headercontent");

    // let exp1 = true;
    // let exp2 = false;
    // let exp3 = false;
    
    const handleToggle1 = () => {
        setBlock1Visible((current) => !current);

        
    };

    const handleToggle2 = () => {
        setBlock2Visible((current) => !current);
    };

    const handleToggle3 = () => {
        setBlock3Visible((current) => !current);
    };

    return (
        <div className="exp">
            <div className="title"><p>My Professional Experience</p></div>

            <div className="collapsible">
                <div className="header" onClick={handleToggle1}>
                    <div className={exp1 ? "headerContentOnClick" : "headercontent" }>
                        <div className="companyname">
                            <h3>Software Developer</h3>
                            <h5>BISAG-N</h5>
                        </div>

                        <div className="duration">January 2019 - July-2021</div>
                    </div>
                </div>
                { exp1 && <div>
                    <div className="content">
                        • Utilized assets and projects hosted on Amazon's AWS Cloud services. <br />
                        • Designed front-end and back-end solutions for test-driven development. <br />
                        • Automated diagnostic testing of developed software using JUnit, Jasmine, and Selenium. <br />
                        • Developed RESTful micro-services using Java. <br />
                        • Designed user-friendly software interfaces to simplify overall management. <br />
                        • Documented technical specifications and project testing methods for future reference and other assignments. <br />
                        • Designed and participated in the implementation of new features and expanded functionality for existing Android applications, developing in accordance with the newest model specifications.
                    </div>
                </div> }
            </div>
                
            <div className="collapsible">
                <div className="header" onClick={handleToggle2}>
                    <div className={exp2 ? "headerContentOnClick" : "headercontent" }>
                        <div className="companyname">
                            <h3>Android Application Developer</h3>
                            <h5>Citta Solutions Private Limited</h5>
                        </div>
                        
                        <div className="duration">May 2018 - December 2018</div>
                    </div>
                </div>
                { exp2 && <div>
                    <div className="content">
                        • Developed mobile applications tailored to client requirements utilizing native technologies. <br />
                        • Analyzed and tested applications before the final step prior to launch so that last-minute issues were remedied quickly. <br />
                        • Created app documentation that provided all pertinent information including features, capabilities,and benefits. <br />
                        • Received troubleshooting assignments from team leads, using diagnostic tools and testing procedures to identify underlying causes of reported application malfunctions. <br />
                        • Reviewed existing code and program architectures to evaluate and report on maintainability and scalability, recommending changes to current configurations or mimicking of effective structures. <br />
                        • Collaborated with a team of 4 to develop and provide technical support for Multiple Android applications, working primarily in Android UI Designing and Working on the Main Functionality of the Application.
                    </div>
                </div> }
            </div>

            <div className="collapsible">
                <div className="header" onClick={handleToggle3}>
                    <div className={exp2 ? "headerContentOnClick" : "headercontent" }>
                        <div className="companyname">
                            <h3>Trainee Engineer (Android Application Developer)</h3>
                            <h5>iCreate Technologies Create Career</h5>
                        </div>
                        
                        <div className="duration">June 2017 - April 2018</div>
                    </div>
                </div>
                { exp3 && <div>
                    <div className="content">
                        • Learned procedures and best practices for building intuitive applications.<br/>
                        • Performed tests to diagnose and report bugs.<br/>
                        • Corrected issues and fixed bugs to deliver smooth-running work.<br/>
                        • Communicated with clients to obtain project requirements.<br/>
                        • Developed mobile applications tailored to client requirements utilizing native technologies.<br/>
                        • Updated software upon release of vendor patches to mitigate vulnerabilities.<br/>
                        • Developed software for embedded systems, and coding solutions for both new installations and insite hardware.
                    </div>
                </div> }
            </div>


        </div>
    );
};
// https://play.google.com/store/apps/details?id=im.govtalkchat.app&hl=en_ZA
//
export default Exp;
