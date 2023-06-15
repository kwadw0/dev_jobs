// let http = new XMLHttpRequest();

// http.open("get", "../json_data/data.json", true);

// http.send();

// http.onload = function(){
//     if(this.readyState == 4 && this.staus == 200){
//         let job_card = JSON.parse(this.responseText);

//         output = "";

//         for(let jobs in job_card){
//             output += `
//                 <div class="job_card">
//                 <div class="job-logo">
//                 <img
//                     class="logo"
//                     style=".${jobs.logoBackground}"
//                     src="${jobs.logo}"
//                     alt=""
//                 />
//                 </div>
//                 <div class="job-info">
//                 <div class="job-time">
//                     <p>${jobs.postedAt} . ${jobs.contract}</p>
//                 </div>
//                 <div class="job-title">
//                     <h2>${jobs.position}</h2>
//                 </div>
//                 <div class="job-company">
//                     <p>${jobs.company}</p>
//                 </div>
//                 <div class="job-location">
//                     <h3>${jobs.location}</h3>
//                 </div>
//                 </div>
//                 </div>
// //             `
//         }
//         console.log(output);
//         document.querySelector(".job_card").innerHTML = output;
//     }

// }

fetch("../json_data/data.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    let placeholder = document.querySelector(".job_container");
    let detail_placeholder  = document.querySelector("company-info-container");

    output = "";
    detail_output = "";

    for (let jobs of data) {
      output += `
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
                </div>`;
    }
    for(let detail_job of data){
        detail_output += `
        <div class="company-info">
        <p id="job-detail-type">${detail_job.postedAt} . ${detail_job.contract}</p>
        <h2 class="job-detail-title">${detail_job.position}</h2>
        <p id="job-detail-location">United Kingdom</p>
        <div class="company-site2-button">
          <button type="submit" id="company-site2">Apply Now</button>
        </div>
      <p id="about-company">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
        eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
        ante et vulputate volutpat, eros pede semper est, vitae luctus metus
        libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
        quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
        tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
        ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien
        ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
        sed, urna.
      </p>
      <h2 id="company-requirements">Requirements</h2>
      <p id="about-company">
        Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
        ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
        libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
        varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
        pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida
        vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
        vulputate vel, nisl.
      <ul id="requirement-list">
        <li>Morbi interdum mollis sapien. Sed</li>
        <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
          pellentesque mauris ut lectus.</li>
        <li>Morbi interdum mollis sapien. Sed</li>
        <li>Morbi interdum mollis sapien. Sed</li>
      </ul>
      </p>
      <h2 id="company-requirements">What you will do</h2>
      <p id="about-company">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus
        libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed
        semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
        sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
      </p>
      <ol id="requirement-list">
        <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
          pellentesque mauris ut lectus.</li>
        <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
          pellentesque mauris ut lectus.</li>
        <li>Morbi interdum mollis sapien. Sed</li>
        <li>Morbi interdum mollis sapien. Sed</li>
      </ol>
    </div>
        
        `
    }
    placeholder.innerHTML = output;
    console.log(output);
    
  })
  ;
