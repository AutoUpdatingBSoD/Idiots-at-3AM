function search_tutorial() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('tutorials');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
            
$(document).ready(function() {
    var csvdata = [    
        ["Edit Ada in Visual Studio: The Right Way!","RunAdaInVSCode.html"],
        ["How to install Cisco AnyConnect VPN on Arch Linux Distributions using the Tarball","ciscotarball.html"],
        ["Common Cybersecurity References","antihack.html"]
        ];
        let x = document.getElementsByClassName('tutorials');
        for (i = 0; i < x.length; i++) { 
            if (x[i].innerText == csvdata[i][0]) {
                x[i].href = csvdata[i][1];
            }          
        }
    });
