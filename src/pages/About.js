import { Link } from "react-router-dom"
import "../style/about.css"

function About(){

    return (
        <div className="container">
            <div className="section-1">
                <img className="profile-icon" alt="profile-icon" src="profileicon.jpg" />
                <div className="info-column">
                    <h6>Front End Developer/Software Engineer</h6>
                    <h6>San Ramon, California, United States</h6>
                    <h6>hamza.american@gmail.com</h6>
                </div>
            </div>
            <div className="about-container">
                <h3>About Me</h3>
                <p>Experienced Software Developer adept in bringing forth expertise in design, installation, testing and maintenance of software systems.
                    Proficient in various platforms, languages, and embedded systems.
                    Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
                    Seeking a challenging role to apply my skills and contribute to dynamic projects in the world of software development.</p>
                <h3>Experience</h3>
                <h5>Front End Developer</h5>
                <h6>NeuroLeap Corp - Internship | Dec 2022 - Dec 2023 | Remote</h6>
                <ul>
                    <li>Developed front-end architecture that improved scalability and performance of the Neuroleap website.</li>
                    <li>Created a single-page application using React.js that allowed users to post articles pertaining to children’s education.</li>
                    <li>Developed a user management tool to allow Neuroleap to efficiently deal with user status and information.</li>
                </ul>
                <h5>Sales Associate</h5>
                <h6>Walmart - Part-time | Aug 2021 - Jan 2023 | San Ramon, CA, US</h6>
                <ul>
                    <li>Provided excellent customer service, resulting in an increase in customer satisfaction ratings.</li>
                    <li>Managed daily operations such as stocking and merchandising to ensure smooth store operations.</li>
                    <li>Assisted customers with locating items and providing product information.</li>
                </ul>
                <h5>Food Service Associate</h5>
                <h6>McDonalds - Part-time | Apr 2015 - Jun 2015 | Danville, CA, US</h6>
                <ul>
                    <li>Maintained cleanliness of restaurant by sweeping, mopping, taking out trash, wiping down tables after guest use, and washing windows.</li>
                    <li>Assisted Customers with questions regarding menu items</li>
                    <li>Safely used cleaning solutions and chemicals</li>
                </ul>
                <h3>Education</h3>
                <h5>California State University, East Bay</h5>
                <h6>BS in Computer Science | Aug 2020 - May 2023</h6>
                <h3>Skills</h3>
                <ul>
                    <li>Java</li>
                    <li>C/C++</li>
                    <li>Frontend Development</li>
                    <li>React.js</li>
                    <li>Android Development</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Git</li>
                    <li>Salesforce</li>
                    <li>Data Analysis</li>
                    <li>Adaptability</li>
                    <li>Team Player</li>
                    <li>Communication</li>
                    <li>Attention To Detail</li>
                </ul>
                <h3>Pages</h3>
                <Link to="write">Create Article</Link>
                <Link to="contact">Contact Us</Link>
                <Link to="user">User Management</Link>
            </div>
        </div>
    )
}

export default About