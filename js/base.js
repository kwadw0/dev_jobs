const companyLocation = document.querySelector(".location-field");
const companyName = document.querySelector(".search-input");
const companyContract = document.querySelector(".input-checkbox");
const searchButton = document.querySelector(".search-button");
const url = "../json_data/data.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const placeholder = document.querySelector(".job_container");

    function renderJobs(jobs) {
      let output = "";

      for (let job of jobs) {
        output += `
          <a class="detail-url" href="../Template/detail.html?id=${job.id}">
            <div class="job_card">
              <div class="job-logo">
                <img
                  class="logo"
                  style="background-color:${job.logoBackground}"
                  src=".${job.logo}"
                  alt=""
                />
              </div>
              <div class="job-info">
                <div class="job-time">
                  <p>${job.postedAt} . ${job.contract}</p>
                </div>
                <div class="job-title">
                  <h3>${job.position}</h3>
                </div>
                <div class="job-company">
                  <p>${job.company}</p>
                </div>
                <div class="job-location">
                  <h3>${job.location}</h3>
                </div>
              </div>
            </div>
          </a>`;
      }

      placeholder.innerHTML = output;
    }

    renderJobs(data);

    // Function to filter jobs based on search criteria
    function filterJobs() {
      const location = companyLocation.value.toLowerCase();
      const name = companyName.value.toLowerCase();
      const fullTime = companyContract.checked;

      const filteredJobs = data.filter(job => {
        const locationMatch = job.location.toLowerCase().includes(location);
        const nameMatch = job.position.toLowerCase().includes(name);
        const fullTimeMatch = !fullTime || job.contract.toLowerCase() === "full time";

        return locationMatch && nameMatch && fullTimeMatch;
      });

      renderJobs(filteredJobs);
    }

    // Event listener for search button click
    searchButton.addEventListener("click", filterJobs);
  });
