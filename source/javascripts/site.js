// This is where it all goes :)
function myFunction(){
  var url = "https://go.verizonconnect.com/nz/"+document.getElementById("answer").value+"/"

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               document.getElementById('button').innerHTML = "&check;"
               window.open(url)
            }
            else {
                document.getElementById('button').innerHTML = "&#8634;"
            }
      };
      xhttp.open("HEAD", url, true);
      xhttp.send();
}
