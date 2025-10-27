console.log("hello world"); /nulis di inspect/
    document.write("hello world pada dokumen"); /nulis di tampilannya/
   
    /buat hello world 1000 X/
    /*for(i=0;i<1001;i++){
    console.log("hello world")
    document.write("hello world <br>")
    }*/

    /*i=0
    while (i <= 10){
        document.write("<br/>hello world ke" + i );
        i++;
    }*/

    /* DOM */
    h1 = document.getElementsByTagName("h1");
    console.log(h1);
    h1[0].style.color ="red";
