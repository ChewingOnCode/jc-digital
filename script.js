// JavaScript to handle mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Certifications
document.addEventListener("DOMContentLoaded", function () {
  // Dummy data for certifications (replace with your actual data)
  const certificationsData = [
    {
      title: "Certification Title 1",
      vendor: "vendor1",
      date: "January 1, 2023",
    },
    {
      title: "Certification Title 2",
      vendor: "vendor2",
      date: "January 1, 2023",
    },
    // Add more certifications as needed
  ];

  // Object to keep track of certificate counts by vendor
  const vendorCertificateCounts = {};

  // Function to render certifications and update certificate counts
  function renderCertifications(vendor) {
    const certificationsContainer = document.getElementById(
      "certifications-container"
    );
    certificationsContainer.innerHTML = "";

    // Filter certifications based on the selected vendor
    const filteredCertifications =
      vendor === "all"
        ? certificationsData
        : certificationsData.filter((cert) => cert.vendor === vendor);

    // Loop through filtered certifications and create card elements
    filteredCertifications.forEach((cert) => {
      const certificationCard = `
          <div class="column is-half">
            <div class="card">
              <div class="card-content">
                <p class="title is-4">${cert.title}</p>
                <div class="level">
                  <div class="level-left">
                    <span class="icon is-medium mr-2">
                      <!-- Add Font Awesome SVG icon for Certification Body (similar to previous code) -->
                    </span>
                  </div>
                </div>
                <p class="subtitle is-6">Issued by ${cert.vendor}</p>
                <div class="content">
                  <p>Details about ${cert.title}...</p>
                </div>
                <p class="is-size-7 has-text-left has-text-grey">Date Issued: ${cert.date}</p>
              </div>
            </div>
          </div>
        `;

      certificationsContainer.innerHTML += certificationCard;

      // Update certificate count for the vendor
      vendorCertificateCounts[cert.vendor] =
        (vendorCertificateCounts[cert.vendor] || 0) + 1;
    });

    // Update certificate count display
    updateCertificateCounts();
  }

  // Function to update certificate counts display
  function updateCertificateCounts() {
    const vendorCountContainers = document.querySelectorAll(
      ".vendor-count-container"
    );

    vendorCountContainers.forEach((container) => {
      const vendor = container.getAttribute("data-vendor");
      const count = vendorCertificateCounts[vendor] || 0;

      // Update vendor name and count
      container.querySelector(".vendor-name").textContent = vendor;
      container.querySelector(".certificate-count span").textContent = count;
    });
  }

  // Event listener for vendor filter dropdown change
  const vendorFilterDropdown = document.getElementById("vendor-filter");
  vendorFilterDropdown.addEventListener("change", function () {
    const selectedVendor = this.value;
    renderCertifications(selectedVendor);
  });

  // Initial rendering (show all certifications)
  renderCertifications("all");
});
