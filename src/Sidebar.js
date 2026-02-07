import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar">Headshot</div>
        <h1 className="name">Shanice Solomon</h1>
        <p className="title">Front-end Developer</p>

        <div className="socials">
          <a className="GitHub-link" href="#">
            GitHub
          </a>
          <a className="LinkedIn-link" href="#">
            LinkedIn
          </a>
          <a className="Email-link" href="#">
            Email
          </a>
        </div>
      </div>
    </aside>
  );
}
