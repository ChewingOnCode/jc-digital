document.addEventListener("DOMContentLoaded", function () {
  // Sample certification data (replace this with your actual data)
  const certifications = [
    {
      title: "Certification 1",
      body: "Certification Body 1",
      date: "12/20/2023",
    },
    {
      title: "Certification 2",
      body: "Certification Body 2",
      date: "01/01/2023",
    },
    // Add more certifications as needed
  ];

  // Get the container element
  const certificationsContainer = document.getElementById(
    "certifications-container"
  );

  // Render certifications
  certifications.forEach((certification) => {
    renderCertification(certificationsContainer, certification);
  });

  // Function to render a certification card
  function renderCertification(container, cert) {
    // Create a column for the certification
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column", "is-half");

    // Create a card for the certification
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    // Create card content
    const cardContentDiv = document.createElement("div");
    cardContentDiv.classList.add("card-content");

    // Create heading for the certification
    const certTitle = document.createElement("p");
    certTitle.classList.add("title", "is-4");
    certTitle.textContent = cert.title;

    // Create subtitle for the certification
    const certSubtitle = document.createElement("p");
    certSubtitle.classList.add("subtitle", "is-6");
    certSubtitle.textContent = cert.body;

    // Create content for the certification
    const certContent = document.createElement("div");
    certContent.classList.add("content");
    certContent.textContent = `Date Finished: ${cert.date}`;

    // Append heading, subtitle, and content to the card content div
    cardContentDiv.appendChild(certTitle);
    cardContentDiv.appendChild(certSubtitle);
    cardContentDiv.appendChild(certContent);

    // Append the card content to the card
    cardDiv.appendChild(cardContentDiv);

    // Append the card to the column
    columnDiv.appendChild(cardDiv);

    // Append the column to the container
    container.appendChild(columnDiv);
  }
});
