var currentHour = moment().hour()
var rows = document.querySelectorAll("div.row");

function colorUpdate() {
rows.forEach(row => {
    var input = row.querySelector("input");
    var rowHour = input.value;
    var textarea = row.querySelector("textarea");
    console.log(textarea);

    var color;
    if (rowHour < currentHour) {
        textarea.style.backgroundColor = "lightgrey";
        // console.log();
    } else if (rowHour > currentHour) {
        textarea.style.backgroundColor = "#97eb19";
    } else {
        textarea.style.backgroundColor = "#ff6b60";
    } 
});
}

$(".saveBtn").on("click", function () {
    var family = $(this).parent().siblings(".col-10").children().children("textarea").val()
    console.log(family)
    var whatTimeItIs = $(this).parent().siblings("input").val()
    console.log(whatTimeItIs)
    localStorage.setItem(whatTimeItIs, family);
})

$("input[value='9']").siblings(".col-10").children().children("textarea").val(localStorage.getItem('9'))
$("input[value='10']").siblings(".col-10").children().children("textarea").val(localStorage.getItem('10'))
$("input[value='11']").siblings(".col-10").children().children("textarea").val(localStorage.getItem('11'))
$("input[value='12']").siblings(".col-10").children().children("textarea").val(localStorage.getItem('12'))
$("input[value='13']").siblings(".col-10").children().children("textarea").val(localStorage.getItem('13'))
$("input[value='14']").siblings(".col-10").children().children("textarea").val(localStorage.getItem('14'))
$("input[value='15']").siblings(".col-10").children().children("textarea").val(localStorage.getItem('15'))
$("input[value='16']").siblings(".col-10").children().children("textarea").val(localStorage.getItem('16'))
$("input[value='17']").siblings(".col-10").children().children("textarea").val(localStorage.getItem('17'))


colorUpdate()

setInterval(colorUpdate, 60000)