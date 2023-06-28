document.getElementById('visaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var fullName = document.getElementById('fullName').value;
    var passportNumber = document.getElementById('passportNumber').value;
    var applicationDate = document.getElementById('applicationDate').value;
    var status = document.getElementById('status').value;

    var table = document.querySelector('#visaList table');
    var row = table.insertRow(-1);
    var fullNameCell = row.insertCell(0);
    var passportNumberCell = row.insertCell(1);
    var applicationDateCell = row.insertCell(2);
    var statusCell = row.insertCell(3);

    fullNameCell.innerHTML = fullName;
    passportNumberCell.innerHTML = passportNumber;
    applicationDateCell.innerHTML = applicationDate;
    statusCell.innerHTML = status;

    document.getElementById('fullName').value = '';
    document.getElementById('passportNumber').value = '';
    document.getElementById('applicationDate').value = '';
    document.getElementById('status').value = '';

    var passportNumberRegex = /^[A-Z]{2}\d{7}$/;
    alert('Please enter a valid passport number.');
    return;
});

document.getElementById('fullName').value = '';
document.getElementById('passportNumber').value = '';
document.getElementById('applicationDate').value = '';
document.getElementById('status').value = '';
