$(document).ready(init)

function init() {
    renderModal()
    renderGallery()
    $('.send-btn').click(sendToGmail)
}

function renderGallery() {
    var projects = getGProjs()
    var strHTMLS = `  <div class="row">`
    projects.map(function(project, idx) {
        strHTMLS += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx+1}">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="img/projs/${project.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
        </div>
    </div>`
    })
    $('.row.start').html(strHTMLS);
}

function renderModal() {
    var projects = getGProjs()
    var strHTML =
        projects.map(function(project, idx) {
            strHTML += `<div class="portfolio-modal modal fade" id="portfolioModal${idx+1}" tabindex="-1" role="dialog" aria-hidden="true">
         <div class="modal-dialog">
             <div class="modal-content">
                 <div class="close-modal" data-dismiss="modal">
                     <div class="lr">
                         <div class="rl"></div>
                     </div>
                 </div>
                 <div class="container">
                     <div class="row">
                         <div class="col-lg-8 mx-auto">
                             <div class="modal-body">
                                 <h2>${project.name}</h2>
                                 <p class="item-intro text-muted">${project.title}</p>
                                 <img class="img-fluid d-block mx-auto" src="img/projs/${project.id}.png" alt="">
                                 <p>${project.desc}</p>
                                 <ul class="list-inline">
                                     <li>Date: ${project.publishedAt}</li>
                                     <li>Type: ${project.labels}</li>
                                 </ul>
                                 <button class="btn btn-primary" data-dismiss="modal" type="button">
                     <i class="fa fa-times"></i>
                     Close Project</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>`
            return strHTML
        })
    $('.insert-modal-here').html(strHTML)
}

function sendToGmail() {
    location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=eran.danieli@gmail.com&su=SUBJECT&body=BODY';
}