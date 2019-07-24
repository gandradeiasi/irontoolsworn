$(document).ready(function() {
    $(".btnBurn").click(function() {
        $("#inputMomentum").val($("#inputReset").val());
        appendLog($("#inputMomentum").val() + " momentum burned!");
    });

    $("#inputMomentum").on("change", function() {
        if (parseInt($("#inputMomentum").val()) > 1) $(".btnBurn").attr("disabled", false);
        else $(".btnBurn").attr("disabled", true);
    });
});

function appendLog(text) {
    $("#log").append("\n" + text + "\n");
    var psconsole = $('#log');
    if(psconsole.length)
       psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
}