$("#alert").hide();

function alertar(message, type) {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    var cls = 'alert-' + type;
    var al = document.getElementById('alert');
    var alT = document.getElementById('alert-message');
    al.removeAttribute("class");
    al.classList.add('alert');
    al.classList.add(cls);
    alT.innerHTML = message;
    $("#alert").show();
}

function showModal(message, title){
    $("#confirmationModalLabel").html(title);
    $("#confirmationModalBody").html(message);
    // args = new FormData();
    // args.append("arg", rev);
    // action = 'aDelete';
    $("#confirmationModal").modal("toggle");
}