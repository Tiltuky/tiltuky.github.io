$i = 1
Get-ChildItem -Path "D:\Go\src\github.com\tiltuky.github.io\scripts\family" -File | Sort-Object Name | ForEach-Object {
    $newName = "f$i" + $_.Extension
    Rename-Item $_.FullName -NewName $newName
    $i++
}
