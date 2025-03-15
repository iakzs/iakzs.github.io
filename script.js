document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

const apiURL = "https://epic-bot.iakzs.hackclub.app/api/stats";
const serversElem = document.getElementById("e-b-servers");
const usersElem = document.getElementById("e-b-users");
const commandsElem = document.getElementById("e-b-commands");
const uptimeElem = document.getElementById("e-b-uptime");

function formatUptime(uptime) {
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
}


fetch(apiURL)
    .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch project stats.");
        return response.json();
    })
    .then((data) => {
        serversElem.textContent = data.servers;
        usersElem.textContent = data.users;
        commandsElem.textContent = data.commands;
        uptimeElem.textContent = formatUptime(data.uptime);
    })
    .catch((error) => {
        console.error(error);
        serversElem.textContent = "Error";
        usersElem.textContent = "Error";
        commandsElem.textContent = "Error";
        uptimeElem.textContent = "Error";
    });

