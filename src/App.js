import './App.scss';
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className='app'>
      {/* <div className="scroll-cta">
        <span className="text">scroll</span>
        <span className="scroll-bar"></span>
      </div> */}
      <Header></Header>
      <div className="content">
        <div className="left">
          <h3>The Voice of <br/> the Entrepreneur</h3>
          <p>The One Man Brand Radio Show with host Ray Seggern is for business owners, leaders, dreamers, and entrepreneurs...basically, anyone who wants to be their own boss! Heard weekly on powerhouse NewsRadio KLBJ-AM, The One Man Brand Radio Show offers engaging advice, interviews, questions, answers and reflections on the ever-shifting world of marketing.</p>
          <p>Spending part of your Saturday with OMBR is the perfect way to get a fresh perspective on your day-to-day challenges. It allows you to work ON your business for a change,rather than working IN it.</p>
          <p className="sign">One man brand</p>
        </div>
        <div className="right">
          <img src="portrait.png" alt="portrait" />
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
