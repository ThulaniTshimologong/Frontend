$("form").on("change", ".file-upload-field", function() {
    $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)./, ''));
    console.log("hey")
})

$("form").on("click", ".text-center", function() {
    alert("hey")
})