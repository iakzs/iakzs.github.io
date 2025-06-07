import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [stats, setStats] = useState({
    servers: 'Loading...',
    users: 'Loading...',
    commands: 'Loading...',
    uptime: 'Loading...'
  });

  const formatUptime = (uptime) => {
    const daysMatch = uptime.match(/(\d+)d/);
    const hoursMatch = uptime.match(/(\d+)h/);
    const minutesMatch = uptime.match(/(\d+)m/);
    const secondsMatch = uptime.match(/(\d+)s/);

    const days = daysMatch ? parseInt(daysMatch[1], 10) : 0;
    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;
    const seconds = secondsMatch ? parseInt(secondsMatch[1], 10) : 0;

    if (days > 0) {
      return `   ${days}d ${hours}h`;
    } else if (hours > 0) {
      return `   ${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `   ${minutes}m ${seconds}s`;
    } else {
      return `   ${seconds}s`;
    }
  };

  useEffect(() => {
    const apiURL = "https://epic-bot.iakzs.hackclub.app/api/stats";

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch project stats.");
        return response.json();
      })
      .then((data) => {
        setStats({
          servers: data.servers,
          users: data.users,
          commands: data.commands,
          uptime: formatUptime(data.uptime)
        });
      })
      .catch((error) => {
        console.error(error);
        setStats({
          servers: "Error",
          users: "Error",
          commands: "Error",
          uptime: "Error"
        });
      });
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Epic-Bot</h3>
        <p>An epic Discord bot written in JS and TS.</p>
        <div className="stats">
          <p><strong>Servers:</strong> <span id="e-b-servers">{stats.servers}</span></p>
          <p><strong>Users:</strong> <span id="e-b-users">{stats.users}</span></p>
          <p><strong>Cmds:</strong> <span id="e-b-commands">{stats.commands}</span></p>
          <p><strong>Uptime:</strong> <span id="e-b-uptime">{stats.uptime}</span></p>
        </div>
        <div className="buttons">
          {/* <a href="https://epic-bot.iakzs.dev" target="_blank" rel="noopener noreferrer">Main Page</a> */}
          <a href="https://status.epic-bot.iakzs.dev" target="_blank" rel="noopener noreferrer">Status</a>
          <a href="https://discord.gg/rmxV8Fhvqd" target="_blank" rel="noopener noreferrer">Discord Server</a>
        </div>
      </div>
      <div className="project">
        <h3>MathCalc</h3>
        <p>The greatest AI-powered math app.</p>
        <div className="buttons">
          <a href="https://mathcalc.app" target="_blank" rel="noopener noreferrer">See MathCalc's web page</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
