
const url = "../json_data/data.json";
const desiredId = 1;
const detailedUrl = `../json_data/data.json`;

// Assuming jsonData is the parsed array of objects from your JSON file


fetch(`${detailedUrl}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    const detail_placeholder = document.querySelector(".company-info-container");

    let detail_output = "";

    data.forEach(function(job) {
      detail_output += `
        <div class="company-info">
          <p id="job-detail-type">${job.postedAt} . ${job.contract}</p>
          <h2 class="job-detail-title">${job.position}</h2>
          <p id="job-detail-location">${job.location}</p>
          <div class="company-site2-button">
            <button type="submit" id="company-site2">Apply Now</button>
          </div>
          <p id="about-company">
          </p>
          <h2 id="company-requirements">Requirements</h2>
          <p id="about-company">
          ${job.requirements.content}
          </p>
          <ul id="requirement-list">`;

      job.requirements.items.forEach(function(item) {
        detail_output += `<li>${item}</li>`;
      });

      detail_output += `
          </ul>
          <h2 id="company-requirements">What you will do</h2>
          <p id="about-company">${job.role.content}
          </p>
          <ol id="requirement-list">`;

      job.role.items.forEach(function(item) {
        detail_output += `<li>${item}</li>`;
      });

      detail_output += `
          </ol>
        </div>`;
    });
    detail_placeholder.innerHTML = detail_output;
  });



fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const placeholder = document.querySelector(".job_container");


    let output = "";


    for (let jobs of data) {
      output += `
      <a class="detail-url" href="../Template/detail.html?id=${jobs.id}">
        <div class="job_card">
          <div class="job-logo">
            <img
              class="logo"
              style="background-color:${jobs.logoBackground}"
              src=".${jobs.logo}"
              alt=""
            />
          </div>
          <div class="job-info">
            <div class="job-time">
              <p>${jobs.postedAt} . ${jobs.contract}</p>
            </div>
            <div class="job-title">
              <h2>${jobs.position}</h2>
            </div>
            <div class="job-company">
              <p>${jobs.company}</p>
            </div>
            <div class="job-location">
              <h3>${jobs.location}</h3>
            </div>
          </div>
        </div>
      </a>`;
      

    }
    
    placeholder.innerHTML = output;

  })



// Extract the ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Search for the object with the matching ID
const matchingObject = url.find(obj => obj.id === id);

// Display the object
if (matchingObject) {
  console.log(matchingObject); // Display the object in the console
  // Display the object properties on a webpage or perform other actions
} else {
  console.log('Object not found');
  // Handle the case when the object with the provided ID is not found
}
