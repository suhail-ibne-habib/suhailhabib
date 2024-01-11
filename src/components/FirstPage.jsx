import Clock from "./Clock";
import Boxes from "./Boxes";

import PlaceHolder from '../assets/img/floating-img.jpg';

function FirstPage() {
  return (
    <>
      <div className="page full-screen background">
        <div className="clock-wrap sidebar colored">
          <h2 class="clock-title">Lorem Ipsum is simply dummy<br></br> text of the printing</h2>
          <Clock />
          <img className='sidebar-float' src={PlaceHolder} alt="" />
        </div>
        <div className="main">
            <div class="shadow"></div>
            
            <div class="result">
                <h2 class="title">Lorem Ipsum is simply</h2>
                <div class="space-50"></div>
                <Boxes />
            </div>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
