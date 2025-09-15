// For projects
fetch("projects.json")
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById("projects-container");

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}
        <a href="${project.link}" target="_blank">View Project</a> | <a href="${project.github}" target="_blank">View Github</a>
        </p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading projects:", error));

