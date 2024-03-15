var yesButton = document.getElementById('yesButton');

yesButton.addEventListener('click', function() {
    // Actions to perform when "Yes" button is clicked
    window.location.href = 'yes.html';
  
  });

  var noButton1 = document.getElementById('noButton1');

  var noButtonClickCount = 0;

  noButton1.addEventListener('click', function() {
    noButtonClickCount++;
    // Change the text of the "No" button
    if(noButtonClickCount===1)
    {
        noButton1.textContent = 'are you sureee....';
    }
    if (noButtonClickCount === 2) {
        noButton1.style.transform = 'translate(100px, 100px)';
        noButton1.textContent = 'really???';
      }
    if (noButtonClickCount === 3) {
        noButton1.style.transform = 'translate(-300px, -400px)';
        noButton1.textContent = 'do you want to think about it some more?';
    }
    if (noButtonClickCount === 4) {
        noButton1.textContent = 'okayy...';
    }
    if (noButtonClickCount === 5) {
        noButton1.style.display = 'none';
    }
    
  });