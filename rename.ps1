$i = 1
Get-ChildItem -Path "D:\Go\src\github.com\tiltuky.github.io\photo\family\noname" -File | Sort-Object Name | ForEach-Object {
    $newName = "$i" + $_.Extension
    Rename-Item $_.FullName -NewName $newName
    $i++
}
