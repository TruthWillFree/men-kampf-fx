(function() {

    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function handleText(textNode)
    {
        var v = textNode.nodeValue;

        v = v.replace(/\bWoman\b/g, "German");
        v = v.replace(/\bwoman\b/g, "German");
        v = v.replace(/\bWomen\b/g, "Germans");
        v = v.replace(/\bwomen\b/g, "Germans");
        v = v.replace(/\bWomen\b/g, "Germans");
        v = v.replace(/\bwomen\b/g, "Germans");
        v = v.replace(/\bSJW\b/g, "SS");
        v = v.replace(/\bsjw\b/g, "SS");
        v = v.replace(/\bSJWs\b/g, "SS");
        v = v.replace(/\bsjws\b/g, "SS");
        v = v.replace(/\bA feminist\b/g, "an Aryan");
        v = v.replace(/\ba feminist\b/g, "an Aryan");
        v = v.replace(/\bFeminist\b/g, "Aryan");
        v = v.replace(/\bfeminist\b/g, "Aryan");
        v = v.replace(/\bFeminists\b/g, "Aryans");
        v = v.replace(/\bfeminists\b/g, "Aryans");
        v = v.replace(/\bTranssexual\b/g, "Master race");
        v = v.replace(/\btranssexual\b/g, "master race");
        v = v.replace(/\bTranssexuals\b/g, "Master race");
        v = v.replace(/\btranssexuals\b/g, "master race");
        v = v.replace(/\bTrans\b/g, "Master race");
        v = v.replace(/\btrans\b/g, "master race");
        v = v.replace(/\bLesbian\b/g, "Übermensch");
        v = v.replace(/\blesbian\b/g, "übermensch");
    
        v = v.replace(/\bMan\b/g, "Jew");
        v = v.replace(/\bman\b/g, "jew");
        v = v.replace(/\bMen\b/g, "Jews");
        v = v.replace(/\bmen\b/g, "jews");
        v = v.replace(/\bStraight\b/g, "Undermensch");
        v = v.replace(/\bstraight\b/g, "undermensch");
        v = v.replace(/\bMale\b/g, "Jew");
        v = v.replace(/\bmale\b/g, "jew");
        v = v.replace(/\bWhite\b/g, "Degenerate");
        v = v.replace(/\bwhite\b/g, "degenerate");
        v = v.replace(/\bCishet\b/g, "Gypsy");
        v = v.replace(/\bcishet\b/g, "gypsy");

        v = v.replace(/\bPatriarchy\b/g, "Zionism");
        v = v.replace(/\bpatriarchy\b/g, "zionism");
        v = v.replace(/\bPatriarchal\b/g, "Zionist");
        v = v.replace(/\bpatriarchal\b/g, "zionist");
        v = v.replace(/\bMisoginy\b/g, "Communism");
        v = v.replace(/\bmisoginy\b/g, "communism");
        
        v = v.replace(/\bRadical feminism\b/g, "Neo-nazism");
        v = v.replace(/\bradical feminism\b/g, "neo-nazism");
        v = v.replace(/\bFeminism\b/g, "Nazism");
        v = v.replace(/\bfeminism\b/g, "nazism");
        v = v.replace(/\bFeminist\b/g, "Nazi");
        v = v.replace(/\bfeminist\b/g, "nazi");
        v = v.replace(/\bRadfem\b/g, "Neo-nazi");
        v = v.replace(/\bradfem\b/g, "neo-nazi");
        
        v = v.replace(/\bSexist\b/g, "Racist");
        v = v.replace(/\bsexist\b/g, "racist");
        v = v.replace(/\bSexism\b/g, "Racism");
        v = v.replace(/\bsexism\b/g, "racism");

        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
        document.getElementById('appcontent').setInterval(function(){ walk(document.body); }, 5000);
    }

    window.addEventListener('load', windowLoadHandler);
}());
