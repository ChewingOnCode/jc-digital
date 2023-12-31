document.addEventListener("DOMContentLoaded", function () {
  // Sample portfolio data (replace this with your actual data)
  const portfolioData = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      genre: "Web Development",
      date: "2023-01-01",
      image: "https://placekitten.com/800/600",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      genre: "UI/UX Design",
      date: "2023-02-01",
      image: "https://placekitten.com/800/600",
    },
    // Add more projects as needed
  ];

  // Sort the portfolio projects by date in descending order
  portfolioData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the container elements
  const latestProjectContainer = document.getElementById(
    "latest-project-container"
  );
  const portfolioContainer = document.getElementById("portfolio-container");

  // Render portfolio projects on portfolio.html
  portfolioData.forEach((project) => {
    renderPortfolioProject(portfolioContainer, project);
  });

  // Render the latest project on index.html
  const latestProject = portfolioData[0];
  renderPortfolioProject(latestProjectContainer, latestProject);

  // Function to render a portfolio project card
  function renderPortfolioProject(container, project) {
    // Create a column for the project
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column", "is-4");

    // Create a card for the project
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("pb-3");

    // Create card image
    const cardImageDiv = document.createElement("div");
    cardImageDiv.classList.add("card-image");
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.title;
    cardImageDiv.appendChild(image);
    cardDiv.appendChild(cardImageDiv);

    // Create card content
    const cardContentDiv = document.createElement("div");
    cardContentDiv.classList.add("card-content");

    // Create heading for the project
    const projectTitle = document.createElement("p");
    projectTitle.classList.add("title", "is-4");
    projectTitle.textContent = project.title;

    // Create content for the project
    const projectContent = document.createElement("div");
    projectContent.classList.add("content");
    projectContent.textContent = project.description;

    // Create date at the bottom left
    const projectDate = document.createElement("p");
    projectDate.classList.add("is-size-7", "has-text-left", "has-text-grey");
    projectDate.textContent = "Date Completed: " + project.date;

    // Create genre tags at the bottom right
    const genreTags = document.createElement("div");
    genreTags.classList.add("tags", "is-pulled-right");
    const genreTag = document.createElement("span");
    genreTag.classList.add("tag", "is-primary");
    genreTag.textContent = project.genre;
    genreTags.appendChild(genreTag);

    // Append heading, content, date, and genre tags to the card content div
    cardContentDiv.appendChild(projectTitle);
    cardContentDiv.appendChild(projectContent);
    cardContentDiv.appendChild(projectDate);
    cardContentDiv.appendChild(genreTags);

    // Append the card content to the card
    cardDiv.appendChild(cardContentDiv);

    // Append the card to the column
    columnDiv.appendChild(cardDiv);

    // Append the column to the container
    container.appendChild(columnDiv);
  }
});
