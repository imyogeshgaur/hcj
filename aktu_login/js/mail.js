const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    sendEmail();
});

var Email = {
    send: function (a) {
      return new Promise(function (n, e) {
        (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
        var t = JSON.stringify(a);
        Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
          n(e);
        });
      });
    },
    ajaxPost: function (e, n, t) {
      var a = Email.createCORSRequest("POST", e);
      a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        (a.onload = function () {
          var e = a.responseText;
          null != t && t(e);
        }),
        a.send(n);
    },
    ajax: function (e, n) {
      var t = Email.createCORSRequest("GET", e);
      (t.onload = function () {
        var e = t.responseText;
        null != n && n(e);
      }),
        t.send();
    },
    createCORSRequest: function (e, n) {
      var t = new XMLHttpRequest();
      return (
        "withCredentials" in t
          ? t.open(e, n, !0)
          : "undefined" != typeof XDomainRequest
          ? (t = new XDomainRequest()).open(e, n)
          : (t = null),
        t
      );
    },
  };

function sendEmail() { 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "akgec234@gmail.com", 
      Password: "GFGIOTSAHD^", 
      To: 'pk828767@gmail.com', 
      From: "akgec234@gmail.com", 
      Subject: "Sending Email using javascript", 
      Body: "Well that was easy!!", 
    }) 
      .then(function (message) { 
        alert("mail sent successfully") 
      }); 
  } 

