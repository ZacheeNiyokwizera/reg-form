// sending emails

    
(function () {
  // emailjs.init("USERID");
  emailjs.init("ZMuZ6kfJ7Na8nsEaS");
})();



function validate() {
  let loader = document.querySelector(".loader");
  let name = document.querySelector(".names");
  let adress = document.querySelector(".adress");
  let work = document.querySelector(".work");
  let style = document.querySelector(".style");
  let level = document.querySelector(".level");
  let expectations = document.querySelector(".expectations");
  let more = document.querySelector(".more");
  let payment = document.querySelector(".payment");
 


function sendmail(name, adress, work, style, level, expectations, more, payment ) {
  emailjs.send("service_x9fw0wr", "template_ertnsfs", {
 
    from_name: name,
    adress: adress,
    work: work,
    style: style,
    level: level,
    expectations: expectations,
    more: more,
    payment: payment,
   
  });
}
// email: email,
function emptyerror() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Fields cannot be empty!",
  });
}

function error() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
}

function success() {
  Swal.fire({
    icon: "success",
    title: "Success...",
    text: "Successfully sent message",
  });
}
let btn = document.querySelector(".form");

  btn.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      name.value == "" || 
      adress.value == "" || 
    work.value == "" || 
    style.value == "" || 
    level.value == "" || 
    expectations.value == "" || 
    more.value == "" || 
    payment.value == "" 
    
      ) {
      emptyerror();
    } else {
      loader.style.display = "flex";
      sendmail(name.value, adress.value, work.value, style.value, level.value, expectations.value, more.value,  payment.value  );
      success();
      loader.style.display = "none";
    }
  });
}
validate();
