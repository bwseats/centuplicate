function displayMessage() {
    let msg = document.getElementById('message').value;

    Swal.fire(
        {
            backdrop: false,
            title: 'app name',
            text: msg
        }
    )
}