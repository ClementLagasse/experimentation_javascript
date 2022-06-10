function display_result(res) {
    document.getElementById('result').innerHTML = res;
}

function cypher_base64() {
    let input = document.getElementById('input').value;
    let which_opt;

    which_opt = document.getElementById('opt-select').value;
    if (which_opt == 'Encode') {
        input = btoa(input);
    } else if (which_opt == 'Decode') {
        input = atob(input);
    } else {
        input = '';
    }
    display_result(input);
}