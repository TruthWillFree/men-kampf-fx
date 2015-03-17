"C:\Program Files\7-Zip\7z" a -xr!.svn menKampf.zip chrome defaults install.rdf chrome.manifest
set /P menKampfRev=<revision.txt
set /a menKampfRev+=1
echo %menKampfRev% > revision.txt
move *.xpi "..\..\..\test\0.5\"
rename menKampf.zip menKampf0.5pre%menKampfRev%.xpi
