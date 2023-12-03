document.getElementById('deduction-form').addEventListener('submit', function() { 
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;
    let amount = document.getElementById('amount').value;
    let month = document.getElementById('month').value;

    if (name == '' || email == '' || contact == '' || amount == '' || month == '') {
    alert('Please fill in all required fields!');
    } else {
    window.location.href = "http://127.0.0.1:5500/successpage.html"; }
    });