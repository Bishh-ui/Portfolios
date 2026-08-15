import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Education</h4>
                <h5>United Academy, Nepal</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed higher secondary education in Nepal with Biology and
              Mathematics as major subjects. Alongside academics, began
              developing coding skills and learning programming languages,
              which sparked a deep interest in computer science and technology.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship & B.Tech Enrollment</h4>
                <h5>Jain University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a six-month internship (February–July) in the
              International Department of Jain University, working in student
              counselling and record keeping. Subsequently enrolled in B.Tech
              Computer Science and Engineering, building strong foundations in
              C, C++, and Python programming.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Machine Learning Projects</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Started building small AI and machine learning projects using
              Grad-CAM and TensorFlow models. Learned to work with CSV data,
              explored data processing and analysis, and began building and
              developing AI agents.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analysis Intern</h4>
                <h5>Terabyte Innovation</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Expanded knowledge of AI models, AI automation, and website
              automation while learning fundamentals of data engineering.
              Completed a two-month internship at Terabyte Innovation in data
              analysis, gaining practical experience applying analytical
              techniques to real-world projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
