import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div>
      <div className="header">
        <div className="title">Company Name</div>
        <div className="box">
          <a
            href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
            className="menu"
          >
            Features
          </a>
          <a
            href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
            className="menu"
          >
            Enterprise
          </a>
          <a
            href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
            className="menu"
          >
            Support
          </a>
          <a
            href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
            className="menu"
          >
            Pricing
          </a>
          <button className="button">Sign up</button>
        </div>
      </div>

      <div className="plan">
        <div className="headline">
          <div className="main">Pricing</div>
          <div className="sub">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </div>
        </div>

        <Card />
      </div>

      <div className="footer">
        <div className="container">
          <div className="logo">
            <div>
              <img
                src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                width="25px"
                alt="bootstrap-logo"
              />
            </div>
            <div className="content">&#169;2017-2018</div>
          </div>
          <div className="menu">
            <div className="box">
              <div className="title">Features</div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Cool stuff
                </a>
              </div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Random feature
                </a>
              </div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Team feature
                </a>
              </div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Stuff for developers
                </a>
              </div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Another one
                </a>
              </div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Last time
                </a>
              </div>
            </div>
            <div className="box">
              <div className="title">Resources</div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Resource
                </a>
              </div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Resource name
                </a>
              </div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Another resource
                </a>
              </div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Final resource
                </a>
              </div>
            </div>
            <div className="box">
              <div className="title">About</div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Team
                </a>
              </div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Locations
                </a>
              </div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Privacy
                </a>
              </div>
              <div className="item">
                <a
                  className="content"
                  href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
