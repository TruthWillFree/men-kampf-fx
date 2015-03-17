"C:\Program Files\7-Zip\7z" a -xr!.svn menKampf.zip chrome install.rdf chrome.manifest
set /P menKampfRev=<revision.txt
set /a menKampfRev+=1
echo %menKampfRev% > revision.txt
move *.xpi "..\..\Test\0.5\"
rename menKampf.zip menKampf0.5pre%menKampfRev%.xpi
