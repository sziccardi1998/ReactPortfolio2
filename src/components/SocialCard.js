import React from "react";

function SocialCard() {
  return (
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Simon Ziccardi</h5>
          <h6 class="card-subtitle">Connect with me here</h6>
          <p class="card-text">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/simon-ziccardi-671169134/">
                  <i class="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/sziccardi1998">
                  <i class="fab fa-github"></i> GitHub
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SocialCard;