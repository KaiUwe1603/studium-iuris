// Collapsibles
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Top Button
document.addEventListener("DOMContentLoaded", function() {
  var topBtn = document.getElementsByClassName("topBtn")[0];

  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

//Back Button
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.backBtn').addEventListener('click', function() {
    window.history.back();
  });
});

//Externe Links
document.addEventListener('DOMContentLoaded', function() {
  var externalLinks = document.querySelectorAll('.external-link');

  externalLinks.forEach(function(link) {
      link.setAttribute('target', '_blank');
  });
});



//Onsitenav
document.addEventListener("DOMContentLoaded", function () {
  let counter = 1;

  document.querySelectorAll('.onsitenav ul ul li').forEach(function (item) {
      let anchor = item.querySelector('a');
      if (anchor) {
          anchor.textContent = '§' + counter + ' ' + anchor.textContent;
          counter++;
      }
  });
});

// Code for the second list (Roman numerals)
counter = 1;

document.querySelectorAll('.onsitenav-roman ul li').forEach(function (item) {
  let anchor = item.querySelector('a');
 
  if (anchor) {
    anchor.textContent = toRoman(counter) + '. ' + anchor.textContent;
    counter++;
  }
});

// Function to convert Arabic numerals to Roman numerals
function toRoman(num) {
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];
    return romanNumerals[num - 1] || num;
}


// Onsitenav1
function addNumberingNonNested(selector) {
  var initialCounterValue = 1;
  var listContainer = document.querySelector(selector);

  if (listContainer) {
    var listItems = listContainer.querySelectorAll('li');

    listItems.forEach(function (li, liIndex) {
      var counterPrefix = listContainer.classList.contains('onsitenavbracket') ? (initialCounterValue++) + ') ' : '§' + (initialCounterValue++) + ' ';
      li.innerHTML =
        '<a href="' +
        li.querySelector('a').getAttribute('href') +
        '">' +
        counterPrefix +
        li.textContent +
        '</a>';
    });
  }
}

// Onsitenav_def
function addNumberingNonNested_bracket(selector) {
  var listContainer = document.querySelector(selector);

  if (listContainer) {
    var listItems = listContainer.querySelectorAll('li');
    var initialCounterValue = 1;

    listItems.forEach(function (li) {
      li.innerHTML =
        '<a href="' +
        li.querySelector('a').getAttribute('href') +
        '">' +
        initialCounterValue +
        ') ' +
        li.textContent +
        '</a>';
      initialCounterValue++;
    });
  }
}

// Apply numbering to onsitenav with ')'
addNumberingNonNested_bracket('.onsitenav1 .onsitenavbracket');

// Apply numbering to onsitenav with '§'
addNumberingNonNested('.onsitenav1');




// Datenschutzerklärung
document.getElementById('english-content').style.display = 'none';

showLanguage('german');

function showLanguage(language) {
    document.querySelectorAll('.language-button').forEach(button => {
        button.classList.remove('active');
    });

    document.querySelector(`.language-button[data-lang="${language}"]`).classList.add('active');

    document.getElementById('german-content').style.display = 'none';
    document.getElementById('english-content').style.display = 'none';

    if (language === 'german') {
        document.getElementById('german-content').style.display = 'block';
    } else {
        document.getElementById('english-content').style.display = 'block';
    }
}


// Width growing collums in a table
document.querySelectorAll('.collapsible').forEach(function(collapsible) {
  collapsible.addEventListener('click', function() {
      var content = this.nextElementSibling;
      var column = this.parentElement;
      var otherColumns = document.querySelectorAll('.table > div:not(.collapsible-column)');
      
      if (content.style.display === 'block') {
          content.style.display = 'none';
          column.classList.remove('expanded');
          otherColumns.forEach(function(col) {
              col.classList.remove('shrink');
          });
      } else {
          document.querySelectorAll('.collapsible-content').forEach(function(content) {
              content.style.display = 'none';
          });
          document.querySelectorAll('.collapsible-column').forEach(function(column) {
              column.classList.remove('expanded');
          });
          content.style.display = 'block';
          column.classList.add('expanded');
          otherColumns.forEach(function(col) {
              col.classList.add('shrink');
          });
      }
  });
});


