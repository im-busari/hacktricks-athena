import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-page-heading-1">Hi Sarah 👋</h1>
      <h2 className="landing-page-heading-2">Ready to take your business to the next stage?</h2>
      <Link className="get-started-link" to="/find-a-mentor">Let's get started</Link>
    </div>
  );
};

export default LandingPage;
