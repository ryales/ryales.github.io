///////////////////////////////////////////////////////////////
// Last Modified: 17 Aug 2015                                //
// Purpose:       Loads XML document for use in the XML DOM. //
///////////////////////////////////////////////////////////////

function loadXMLDoc(filename) {
    if (window.XMLHttpRequest) {
        xhttp=new XMLHttpRequest();
    } else { // code for IE5 and IE6
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.open("GET",filename,true);
    xhttp.send();
    return xhttp.responseXML;
}
