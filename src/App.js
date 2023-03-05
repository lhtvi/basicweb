import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Tralvel</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" >Trang chủ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#chuyenbay">Chuyến bay</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#khachsan">Khách sạn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#tours">Tours</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#lienhe">Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Khám phá</div>
        <div className="intro-heading text-uppercase">Việt Nam</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Cung cấp dịch vụ</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Về chúng tôi</h2>
          <h3 className="section-subheading text-muted">các dịch vụ cung cấp.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">dịch vụ 1</h4>
          <p className="text-muted">Dịch vụ cung cấp trên chương trình du lịch, nhằm đảm bảo đáp ứng nhu cầu ăn, ở, lưu trú, đi lại, tham quan, giải trí của khách du lịch từ lúc đón khách cho tới lúc đưa khách về nơi khách du lịch mong muốn sau chương trình du lịch của mình.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">dịch vụ 2</h4>
          <p className="text-muted">Dịch vụ cung cấp trên chương trình du lịch, nhằm đảm bảo đáp ứng nhu cầu ăn, ở, lưu trú, đi lại, tham quan, giải trí của khách du lịch từ lúc đón khách cho tới lúc đưa khách về nơi khách du lịch mong muốn sau chương trình du lịch của mình</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">dịch vụ 3</h4>
          <p className="text-muted">Dịch vụ cung cấp trên chương trình du lịch, nhằm đảm bảo đáp ứng nhu cầu ăn, ở, lưu trú, đi lại, tham quan, giải trí của khách du lịch từ lúc đón khách cho tới lúc đưa khách về nơi khách du lịch mong muốn sau chương trình du lịch của mình</p>
        </div>
      </div>
    </div>
  </section>

  

  
  <section className="page-section" id="about">
    <div className="container" >
      <div className="row">
        <div className="col-lg-12" >
          <h2 className="section-heading text-uppercase">Về chúng tôi</h2>
          <p className="text-muted">Dịch vụ cung cấp trên chương trình du lịch, nhằm đảm bảo đáp ứng nhu cầu ăn, ở, lưu trú, đi lại, tham quan, giải trí của khách du lịch từ lúc đón
                                khách cho tới lúc đưa khách về nơi khách du lịch mong muốn sau chương
                                trình du lịch của mình</p>

          <p className="text-muted">Chúng ta nghĩ đến một điểm đến thú vị, dịch vụ phù hợp, sự hiếu khách chi phí phù hợp</p>
          <p className="text-muted">Chúng tôi hệ thống tư vấn khách hàng 24/7 giải đáp mọi thắc mắc của khách hàng như: </p>
                            <p className="text-muted"> + Đặt tour như thế nào? </p>
                            <p className="text-muted"> + Có thể tự chọn chỗ ngồi được không? </p>
                            <p className="text-muted"> + Ăn uống tuỳ thích không? </p>
                            <p className="text-muted"> + Đi tour không muốn đi cùng đoàn được không?</p>
                            <p className="text-muted"> + Người lớn tuổi có đi tour được không?</p>
                            <p className="text-muted"> + Có mặt ở sân bay trước mấy giờ?</p>
                            <p className="text-muted"> + Trẻ em khi đi tour cần mang theo giấy tờ gì?</p>
                            <p className="text-muted"> + Có chi phí phát sinh không?</p>
                            <p className="text-muted"> + Có thể chọn khách sạn khách không?</p>
                            <p className="text-muted"> + Tôi là người ngoại quốc, hướng dẫn viên có thể nói tiếng anh không?</p>
                            <p className="text-muted"> + Hoá đơn như thế nào?</p>
                            <p className="text-muted"> + Tôi cần lưu ý gì khi đi tour không?</p>
        </div>
      </div>
      
    </div>
  </section>





  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Liên hệ</h2>
          <h3 className="section-subheading text-muted">Gửi email thắc mắc</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Gửi Email</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div class="row">

         <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 footer-widget ftr-contact">
                        <h3 class="footer-heading">Liên hệ chúng tôi</h3>
                        <ul class="list-unstyled">
                            <li><span></span>Email: StartTralvel@gmial.com</li>
                            <li><span><i class="fa fa-phone"></i></span>+0338.909.973</li>
                        </ul>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-2 col-lg-2 footer-widget ftr-links">
                        <h3 class="footer-heading">Công ty</h3>
                        <ul class="list-unstyled" >
                            <li><a href="/">Trang chủ</a></li>
                            <li><a href="/">Chuyến bay</a></li>
                            <li><a href="/">Khách sạn</a></li>
                            <li><a href="/">Tour</a></li>
                        </ul>
         </div>

        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 footer-widget ftr-links ftr-pad-left">
                  <h3 class="footer-heading">Tài nguyên</h3>
                        <ul class="list-unstyled">
                            <li><a href="/">Liên hệ chúng tôi</a></li>
                            <li><a href="/">Đăng nhập</a></li>
                            <li><a href="/">Đăng ký</a></li>
                        </ul>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 footer-widget ftr-about">
                        <h3 class="footer-heading">Về chúng tôi</h3>
                        <p >Với mong muốn phục vụ ngày càng nhiều khách du lịch Việt Nam và Thế giới. Logo của chúng tôi
                            lấy màu chủ đạo là màu vàng màu của mảnh đất mẹ Việt Nam, những con người Việt Nam hiền
                            lành, thân thiện luôn khát khao khám phá đất nước.</p>
                     
        </div>           

      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
