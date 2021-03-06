"use strict";

var myCramps = {
  walk: function walk(node) {
      // I stole this function from here:
      // http://is.gd/mwZp7E
  
      var child, next;
  
      if (node && typeof node.nodeType != 'undefined')
        switch ( node.nodeType )  
        {
          case 1:  // Element
          case 9:  // Document
          case 11: // Document fragment
              child = node.firstChild;
              while ( child ) 
              {
                  next = child.nextSibling;
                  this.walk(child);
                  child = next;
              }
              break;
  
          case 3: // Text node
              this.handleText(node);
              break;
        }
  } ,
  
  handleText: function handleText(textNode) {
      let util = myCramps.Util,
          prefs = myCramps.Preferences,
          v = textNode.nodeValue;
          
      if (!prefs.isActive)
        return;
      util.logDebug('handleText(' + textNode + ')');

      v = v.replace(/\bWoman\b/g, "German");
      v = v.replace(/\bwoman\b/g, "German");
      v = v.replace(/\bWomen\b/g, "Germans");
      v = v.replace(/\bwomen\b/g, "Germans");
      v = v.replace(/\bWomen\b/g, "Germans");
      v = v.replace(/\bwomen\b/g, "Germans");
      v = v.replace(/\bFemale\b/g, "German");
      v = v.replace(/\bfemale\b/g, "german");
      v = v.replace(/\bFemales\b/g, "Germans");
      v = v.replace(/\bfemales\b/g, "germans");
      v = v.replace(/\bgirl\b/g, "Jungmädel");
      v = v.replace(/\bgirls\b/g, "Jungmädels");
      v = v.replace(/\bboy\b/g, "Judenkid");
      v = v.replace(/\bboys\b/g, "Judenkids");
      v = v.replace(/\bBoys\b/g, "Young Jews");
      
      v = v.replace(/\bcircumcision\b/g, "cosmetic truncation");
       
      v = v.replace(/\byes\b/g, "jawohl");
      v = v.replace(/\bYes\b/g, "Jawohl");
      
      v = v.replace(/\men tears\b/g, "Judentränen");
      v = v.replace(/\man tears\b/g, "Judentränen");
      
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
  
      v = v.replace(/\bmanhater\b/g, "judenhater");
      v = v.replace(/\bMan\b/g, "Jew");
      v = v.replace(/\bman\b/g, "jew");
      v = v.replace(/\bmanhood\b/g, "Judentum");
      v = v.replace(/\bMen\b/g, "Jews");
      v = v.replace(/\bmen\b/g, "jews");
      v = v.replace(/\bStraight\b/g, "Heterosexual");
      v = v.replace(/\bstraight\b/g, "heterosexual");
      v = v.replace(/\bMale\b/g, "Jewish");
      v = v.replace(/\bmale\b/g, "jewish");
      v = v.replace(/\bmales\b/g, "jewish");
      v = v.replace(/\bblack\b/g, "noble");
      v = v.replace(/\bcolored\b/g, "golden");
      v = v.replace(/\bguy\b/g, "kike");
      v = v.replace(/\bguys\b/g, "kikes");
      v = v.replace(/\bGuys\b/g, "Kikes");
      
      v = v.replace(/\bWhite\b/g, "Honkey");  // Degenerate
      v = v.replace(/\bwhite\b/g, "bleached");  // degenerate

      v = v.replace(/\bfather\b/g, "serf");
      v = v.replace(/\bfathers\b/g, "serfs");
      v = v.replace(/\bsexual assault\b/g, "sexual assault or stumm porking"); // mute caressing? wordless intimacy
      v = v.replace(/\brape\b/g, "rape or whatever we will define as it in the future");
      v = v.replace(/\bVictim\b/g, "Accuser");
      v = v.replace(/\bvictim\b/g, "accuser");
      v = v.replace(/\bvictims\b/g, "accusers");
      v = v.replace(/\bperpetrator\b/g, "accused");
      //v = v.replace(/\brapist\b/g, "accused"); ??
      
      v = v.replace(/\bCishet\b/g, "Gypsy");
      v = v.replace(/\bcishet\b/g, "gypsy");
      
      v = v.replace(/\bprogressive\b/g, "progrrressive");  // degenerate
      v = v.replace(/\bprogressively\b/g, "progrrressively");  
      v = v.replace(/\boffensive\b/g, "offfensive");  
      v = v.replace(/\btell\b/g, "manipulate");  
      v = v.replace(/\bsay\b/g, "insinuate");  
      v = v.replace(/\bcensorship\b/g, "corrective narrative control");  

      v = v.replace(/\bPatriarchy\b/g, "Zionism");
      v = v.replace(/\bpatriarchy\b/g, "zionism");
      v = v.replace(/\bPatriarchal\b/g, "Zionist");
      v = v.replace(/\bpatriarchal\b/g, "zionist");
      v = v.replace(/\bMisogyny\b/g, "Zionistic Dominance"); // was communism
      v = v.replace(/\bmisogyny\b/g, "krautphobia");
      v = v.replace(/\bmisogynist\b/g, "krauthater");
      v = v.replace(/\bmisogynists\b/g, "krauthaters");
      v = v.replace(/\Misandry\b/g, "Anti-semitism");
      v = v.replace(/\misandry\b/g, "anti-semitism");
      v = v.replace(/\misandrist\b/g, "anti-semitic");
      v = v.replace(/\scum manifesto\b/g, "Mein Kampf");
      v = v.replace(/\Anita Sarkeesian\b/g, "Führer Sarkeesian");
      v = v.replace(/\Brianna Wu\b/g, "Ribena Woo");
      
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
      
      v = v.replace(/\bkindergarten\b/g, "hitler youth");
      v = v.replace(/\bKindergarten\b/g, "Hitler Youth");
      v = v.replace(/\bgirl scouts\b/g, "Hitler Youth");

      textNode.nodeValue = v;
  } ,
  
  onToolbarButton: function onButton (evt) {
    let isActive = (myCramps.Preferences.getBoolPref('active'));
    isActive = !isActive;
    myCramps.Preferences.setBoolPref('active', isActive);
    if (isActive)
      evt.target.setAttribute("checked" , isActive);
    else
      evt.target.removeAttribute("checked");
    // alert('Extension Active = ' + isActive);
    let tabbrowser = getBrowser();
    if (isActive) {
      tabbrowser.reload(tabbrowser.selectedTab);
      myCramps.walk(document.body).bind(myCramps);
    }
    else {
      tabbrowser.reload(tabbrowser.selectedTab);
    }
    /*
    if (isActive) {
      myCramps.walk(document.body).bind(myCramps);
    }
    */
  },
  
  checkFirstRun: function checkFirstRun() {
    // check if not first run
    if (!myCramps.Preferences.getBoolPref('firstRun'))
      return;
    
    // automatically add the toolbar button:
    let toolbar = document.getElementById('nav-bar');
    if (!toolbar.currentSet.match('myCramps-toolbarbutton')) {
        let newset = toolbar.currentSet.concat(',myCramps-toolbarbutton');
        toolbar.currentSet = newset;
        toolbar.setAttribute('currentset', newset);
        document.persist(toolbar.id, "currentset");
    }
    myCramps.Preferences.setBoolPref('firstRun', false);
    let text = 
      'You have been handed your glasses.' +    
      '\nJust reach for the red button with the four Fs to see the truth.' +
      '\n Always remember: THEY LIVE! ';
    myCramps.Util.alert(text, 'myCramps (men Kampf): A Satirical Add-on');
  }
};    
    
(function() {
    function windowLoadHandler()
    {
      // Dear Mozilla: I hate you for making me do this.
      window.removeEventListener('load', windowLoadHandler);
      setTimeout( function() { 
        myCramps.checkFirstRun();
        }, 10000 );
        
      // show button in correct state
      let btn = document.getElementById('myCramps-toolbarbutton');
      if (btn) try {
        let active = myCramps.Preferences.getBoolPref('active');
        if (active)
          btn.setAttribute("checked", active);        
        else
          btn.removeAttribute("checked");  
      } catch(ex) {;}
      
      var appContent = document.getElementById('appcontent');
      appContent.addEventListener('DOMContentLoaded', function(e) {
          myCramps.walk(e.originalTarget.body).bind(myCramps);
      });
      // setInterval - why do this again and again?
      // this is potentially performance killing
      // lets try setTimeout instead
      appContent.setTimeout(
        function(){ myCramps.walk(document.body).bind(myCramps); }, 15000
      );
    }

    window.addEventListener('load', windowLoadHandler);
}());
