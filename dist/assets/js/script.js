document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for the navbar burger
  var burger = document.querySelector(".navbar-burger");
  var menu = document.getElementById(burger.dataset.target);

  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });

  // Certification data
  const certs = [
    {
      title: "JS Course",
      vendor: "Udemy",
      date: "Feb 2023",
    },
    {
      title: "To Be Announced",
      vendor: "Cisco",
      date: "Mar 2023",
    },
  ];

  // Calculate cert counts per vendor
  function getVendorCounts(certs) {
    return certs.reduce((acc, cert) => {
      // If the vendor is encountered for the first time, initialize the count to 0
      if (!acc[cert.vendor]) {
        acc[cert.vendor] = 0;
      }
      // Increment the certification count for the current vendor
      acc[cert.vendor]++;
      // Return the accumulator for the next iteration
      return acc;
    }, {});
  }

  // Create vendor certification cards
  function createVendorCards(vendors) {
    const cardsContainer = document.getElementById("cert-cards");

    // Check if the element exists before proceeding
    if (cardsContainer) {
      // Loop through each vendor
      Object.keys(vendors).forEach((vendor) => {
        // create Column
        const column = document.createElement("div");
        column.className = "column is-one-third";

        // Create card
        const card = document.createElement("div");
        card.className = "card py-3";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.justifyContent = "center";
        card.style.alignItems = "center";

        // Add vendor image
        const image = document.createElement("img");
        image.src = `/dist/assets/${vendor}.svg`;
        image.loading = "lazy";
        image.width = 48;
        image.height = 48;

        // Add vendor name
        const name = document.createElement("h3");
        name.className = "title py-2";
        name.textContent = vendor;

        // Add certification count
        const count = document.createElement("span");
        count.className = "tag is-primary px-3 py-2 is-rounded is-medium";
        count.textContent = vendors[vendor];

        // Append elements
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(count);

        // Add card to container
        cardsContainer.appendChild(column);
        column.appendChild(card);
      });
    }
  }

  // Initialize
  function init() {
    const vendorCounts = getVendorCounts(certs);
    createVendorCards(vendorCounts);
  }

  // Add this block to ensure the code runs after DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    init(); // Call your initialization function
  });
});
