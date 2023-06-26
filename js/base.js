const url = "../json_data/data.json";


fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const placeholder = document.querySelector(".job_container");


    let output = "";


    for (let jobs of data) {
      output += `
      <a class="detail-url"  href="../Template/detail.html?id=${jobs.id}" >
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
      
      function detailViewUrl(){
        window.location.href = `../Template/detail.html?id=${jobs.id}`;
      }
    }
    
    
    placeholder.innerHTML = output;

  })
