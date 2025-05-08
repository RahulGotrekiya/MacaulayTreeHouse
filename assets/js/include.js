class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="header-container">
          <div class="logo">
            <a href="index.html">
              <img src="assets/images/main-logo.png" alt="logo" />
            </a>
          </div>
          <div class="header-right">
            <div class="header-contact">
              <a href="tel:7056451956">
                <img src="assets/images/header-phone.png" alt="phone" />
              </a>
              <a href="tel:7056451956">
                <strong>Call us Today</strong>
                (705) 645-1956
              </a>
            </div>
            <div class="header-togle">
              <nav>
                <div class="hamburger">
                  <div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                  </div>
                </div>
              </nav>
              <div class="header-menu">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="summer-camp.html">Summer Camp</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;

    let hamburger = this.querySelector(".hamburger");
    let nav = this.querySelector(".header-menu");
    let sun = document.querySelector(".iamsun");
    let girl = document.querySelector(".super-girl");

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("isactive");
      nav.classList.toggle("active");
      if (sun) sun.classList.toggle("active");
      if (girl) girl.classList.toggle("active");
    });
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-main">
            <div class="cols col-left">
              <h4>Macaulay Tree House Day Nursery</h4>
              <p>
                50 The Granite Bluff,<br />
                Bracebridge, ON P1L 1L4, Canada
              </p>
              <div class="social-media">
                <a href="#"
                  ><img src="assets/images/facebook.svg" alt="facebook"
                /></a>
                <a href="#"><img src="assets/images/twitter.svg" alt="twitter" /></a>
                <a href="#"><img src="assets/images/youtube.svg" alt="youtube" /></a>
                <a href="#"
                  ><img src="assets/images/linkedin.svg" alt="linkedin"
                /></a>
                <a href="#"
                  ><img src="assets/images/instagram.svg" alt="instagram"
                /></a>
              </div>
            </div>
            <div class="cols col-center">
              <table class="contact-info">
                <tr>
                  <th colspan="2">
                    <h4>Daycare</h4>
                  </th>
                </tr>
                <tr>
                  <td colspan="2">
                    <p>Leesa Horsfield, Executive Director</p>
                  </td>
                </tr>
                <tr>
                  <td><p>Office:</p></td>
                  <td><a href="tel:7056451956">(705) 645-1956</a></td>
                </tr>
                <tr>
                  <td><p>Fax:</p></td>
                  <td><a href="tel:7056455846">(705) 645-5846</a></td>
                </tr>
                <tr>
                  <td><p>Email:</p></td>
                  <td>
                    <a href="mailto:admin@macaulaytreehouse.ca"
                      >admin@macaulaytreehouse.ca</a
                    >
                  </td>
                </tr>
              </table>
            </div>
            <div class="cols col-right">
              <table class="contact-info">
                <tr>
                  <th colspan="2">
                    <h4>School Age Programs</h4>
                  </th>
                </tr>
                <tr>
                  <td colspan="2">
                    <p>Gina Nuttall, Supervisor</p>
                  </td>
                </tr>
                <tr>
                  <td><p>Office:</p></td>
                  <td><a href="tel:7056451953">(705) 645-1953</a></td>
                </tr>
                <tr>
                  <td><p>Fax:</p></td>
                  <td><a href="tel:7056419688">(705)641-9688</a></td>
                </tr>
                <tr>
                  <td><p>Email:</p></td>
                  <td>
                    <a href="mailto:schoolage@macaulaytreehouse.ca"
                      >schoolage@macaulaytreehouse.ca</a
                    >
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="footer-navbar">
            <nav class="navbar">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="programs.html">Our Programs</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="gallery.html">Galleries</a></li>
                <li><a href="covid-19.html">Covid-19</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div class="copyright">
            <p>Copyright © 2022, Macaulay Tree House. All Rights Reserved.</p>
            <p>Produced by <a href="#" target="_blank">creative one®</a></p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("my-footer", MyFooter);
