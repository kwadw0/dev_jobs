const detailedUrl = "../json_data/data.json";

// Get the job ID from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const jobId = parseInt(urlParams.get("id")); // Parse the ID as an integer

fetch(detailedUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    // Find the job with the matching ID
    const job = data.find(function (job) {
      return job.id === jobId;
    });

    if (job) {
      const detail_placeholder = document.querySelector(
        ".company-info-container",
      );
      const header_placeholder = document.querySelector(".company-detail-container");
      const footer_placeholder = document.querySelector(".footer")
      let detail_output = `
        <div class="company-info">
          <p id="job-detail-type">${job.postedAt} . ${job.contract}</p>
          <h3 class="job-detail-title">${job.position}</h3>
          <p id="job-detail-location">${job.location}</p>
          <div class="company-site2-button">
            <button type="submit" id="company-site2">Apply Now</button>
          </div>
          <p id="about-company">${job.description}</p>
          <h2 id="company-requirements">Requirements</h2>
          <p id="about-company">${job.requirements.content}</p>
          <ul id="requirement-list">`;

      job.requirements.items.forEach(function (item) {
        detail_output += `<li>${item}</li>`;
      });

      detail_output += `
          </ul>
          <h2 id="company-requirements">What you will do</h2>
          <p id="about-company">${job.role.content}</p>
          <ol id="requirement-list">`;

      job.role.items.forEach(function (item) {
        detail_output += `<li>${item}</li>`;
      });

      detail_output += `
          </ol>
        </div>`;
      let header_output = `
        <div class="logo">
        <img
                class="detail-logo"
                style="background-color:${job.logoBackground}"
                src=".${job.logo}"
                alt=""
            />
        </div>
        <div class="company-name">
        <h2 id="detail-company-name">${job.company}</h2>
        <p id="company-website"><a href="${job.website}">${job.company}.com</a></p>
        </div>

        <div class="company-site-button">
        <button type="submit" id="company-site">Company Site</button>
        </div>      
        `;

      let footer_output = `
      <h3 class="company-name-footer">${job.position}</h3>
      
      <p id="company-website">${job.company}</p>
      <button type="submit" id="company-footer-site">Company Site</button>
      `;
    

      detail_placeholder.innerHTML = detail_output;
      header_placeholder.innerHTML = header_output;
      footer_placeholder.innerHTML = footer_output;
    } else {
      console.error("Job not found.");
    }
  });
