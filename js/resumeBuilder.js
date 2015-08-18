"use strict";

//Creates an object named bio.
var bio = {
  name : "Lauren Tucker",
  role : "Web Developer",
  contacts : {
    mobile : "(512) 905-7370",
    email : "l.blue.tucker@gmail.com",
    github : "laurenfromseattle",
    location : "Seattle"
  },
  bioPic : "img/logo-white.svg",
  welcomeMessage : "Hi, I'm Lauren.<br>I build things<br>on the web.",
  skills : [
    "Consulting",
    "Content Development",
    "Coding"
  ]
};

//Creates an object named work.
var work = {
  jobs : [{
  employer : "AltaCreative",
  link : "http://www.goalta.com",
  title : "Sr. Copywriter & Editor",
  dates : "2011–2015",
  location : "Austin, TX",
  description : "Provide writing, editorial, web design and front-end web development support to a small creative agency in the financial services industry."
  },
  {
  employer : "The Austin Chronicle",
  link : "http://www.austinchronicle.com/",
  title : "Proofreader",
  dates : "20012–2013",
  location : "Austin",
  description : "Provided proofreading services for a local alt-weekly."
  },
  {
  employer : "atlantic-community.org",
  link : "http://www.atlantic-community.org",
  title : "Editorial and Outreach Coordinator",
  dates : "2009–2011",
  location : "Berlin",
  description : "Managed global policy teams for an international relations think tank website."
  }]
};

//Creates an object named projects.
var projects = {
  projects : [{
    title : "Online Portfolio",
    URL : "http://www.tuckerwebsites.com",
    dates : "Project completed July 2015",
    description : "Built a responsive online portfolio website using HTML, Bootstrap, custom CSS and JavaScript.",
    images : [
      "img/ross-lake.jpg",
      "img/salt-flats.jpg"
    ]
  },
  {
    title : "Online Resume",
    URL : "http://www.tuckerwebsites.com",
    dates : "Project completed August 2015",
    description : "Built an online resume populated dynamically with JavaScript.",
    images : [
      "img/arches.jpg",
      "img/chaco-canyon.jpg"
    ]
  }
  ]
};

//Creates an object named education.
//There are two types of education, university and online, so I am creating two property groupings, schools and onlineCourses. Each property is an array of objects.
var education = {
  schools : [{
    name : "UNC – Chapel Hill",
    URL : "http://www.google.com",
    degree : "MA in Political Science",
    dates : "2009–2011",
    location : "Chapel Hill, NC"
  },
  {
    name : "Boston University",
    URL : "http://www.google.com",
    degree : "BA in International Relations",
    dates : "2001–2005",
    location : "Boston, MA"
  }],
  onlineCourses : [{
    title : "Front-End Web Developer Nanodegree",
    mainURL : "http://www.udacity.com",
    school : "Udacity",
    dates : "Course currently in progress",
    courseURL : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  },
  {
    title : "6.00.1x: Introduction to Computer Science and Programming Using Python",
    mainURL : "http://www.edx.com",
    school : "MITx",
    dates : "Honor code certificate issued August 15, 2014",
    courseURL : "https://verify.edx.org/cert/ad67ef7a1f8c46908b344780455cab65"
  },
  {
    title : "Codecademy JavaScript",
    mainURL : "http://www.codecademy.com",
    school : "Codecademy",
    dates : "Course completed August 17, 2015",
    courseURL : "https://www.codecademy.com/en/tracks/javascript"
  },
  {
    title : "Codecademy Introduction to PHP",
    mainURL : "http://www.codecademy.com",
    school : "Codecademy",
    dates : "Course completed February 24, 2015",
    courseURL : "http://www.codecademy.com/en/tracks/php"
  }]
};

//Displays bio info -- something to do with encapsulation??? -- figure this out
bio.display = function() {
  //Name and Title
  $('#logo').append(HTMLbioPic.replace('%data%', bio.bioPic));
  $('.resumeHeader').append(HTMLheaderName.replace('%data%', bio.name));
  $('.resumeHeader').append(HTMLheaderRole.replace('%data%', bio.role));

  //Header Contacts
  $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
  $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
  $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
  $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));

  //Picture and Welcome Message
  $('#introduction').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

  //Using IF conditional to check that skills array in the bio object is not empty. Will not append skills to #header if the skills array is empty.
  if (bio.skills.length > 0) {
    $('#introduction').append(HTMLskillsStart);
    //Setting up for loop that iterates over the skills array in the bio object
    for (var i = 0; i < bio.skills.length; i++) {
      $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
    }
  }
};

bio.display();

//Work Experience

/*
//This is an example of how to do a for-in loop. This was very tricky to figure out.
for (job in work.jobs) {
  $('#workExperience').append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace('#">%data%', work.jobs[job].link + '">' + work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
  var formattedWorkEntry = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedWorkEntry);
}
*/

//Displays work info -- something to do with encapsulation??? -- figure this out
work.display = function () {
  var jobsArrayLength = work.jobs.length;
  //Setting up a for loop that iterates over the jobs array in the work object
  for (var i = 0; i < jobsArrayLength; i++) {
    //Creates <div class="work-entry"></div> for each iteration
    $('#workExperience').append(HTMLworkStart);
    //Uses jQuery to replace data in helper.js with our new data for each property
    var formattedEmployer = HTMLworkEmployer.replace('#">%data%', work.jobs[i].link + '">' + work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
    var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
    var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
    var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
    var formattedWorkEntry = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
    //Appends formatted data to the last element with .work-entry as a class
    $('.work-entry:last').append(formattedWorkEntry);
  }
};

work.display();

//Displays project info -- something to do with encapsulation??? -- figure this out
projects.display = function() {
  var projectsArrayLength = projects.projects.length;
  //Setting up a FOR loop that iterates over the projects array in the projects object
  for (var i = 0; i < projectsArrayLength; i++) {
    //Creates <div class="project-entry"></div> for each iteration
    $('#projects').append(HTMLprojectStart);
    //Uses jQuery to replace data in helper.js with our new data for each property
    var formattedTitle = HTMLprojectTitle.replace('#">%data%', projects.projects[i].URL + '">' + projects.projects[i].title);
    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
    var formattedProjectEntry = formattedTitle + formattedDates + formattedDescription;
    //Appends formatted data to the last element with .work-entry as a class
    $('.project-entry:last').append(formattedProjectEntry);
    //Setting up a FOR loop that iterates over the images array in the projects array in the projects object
    if (projects.projects[i].images.length > 0) {
      for (var j = 0; j < projects.projects[i].images.length; j++) {
        //Uses jQuery to replace data in helper.js with our new data
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
        //Appends formatted data to the last .work-entry element
        $('.project-entry:last').append(formattedImage);
      }
    }
  }
};

projects.display();

//Displays education info -- something to do with encapsulation??? -- figure this out
education.display = function() {
  var schoolsArrayLength = education.schools.length;
  var coursesArrayLength = education.onlineCourses.length;
  //Setting up a for loop that iterates over the schools array in the education object
  for (var i = 0; i < schoolsArrayLength; i++) {
    $('#education').append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace('#">%data%', education.schools[i].URL + '">' + education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
    var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
    var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
    var formattedEducationEntry = formattedName + formattedDegree + formattedDates + formattedLocation;
    $('.education-entry:last').append(formattedEducationEntry);
  }

  //Appends the Online Education header
  $('#education').append(HTMLonlineClasses);

  //Setting up a for loop that iterates over the onlineCourses array in the education object
  for (var i = 0; i < coursesArrayLength; i++) {
    $('#education').append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace('#">%data%', education.onlineCourses[i].mainURL + '">' + education.onlineCourses[i].title);
    var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
    var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
    var formattedURL =  HTMLonlineURL.replace('#">%data%', education.onlineCourses[i].courseURL + '">' + education.onlineCourses[i].courseURL);
    var formattedEducationEntry = formattedTitle + formattedSchool + formattedDates + formattedURL;
    $('.education-entry:last').append(formattedEducationEntry);
  }
};

education.display();

//Google Map

//Appends Google Map
$('#map-div').append(googleMap);

//Displays bio contact info -- something to do with encapsulation??? -- figure this out
bio.contacts.display = function() {
  //Footer Contacts
  $('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
  $('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
  $('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
  $('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
};

bio.contacts.display();