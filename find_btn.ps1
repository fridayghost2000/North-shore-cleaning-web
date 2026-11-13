Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("C:/Users/Uxdlab/.gemini/antigravity/scratch/northshoreclean/app/slider_crop.png")

# Let's find the bounding box of the dark element (slider button)
$minX = 999; $maxX = 0; $minY = 999; $maxY = 0;
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 40 -and $c.G -lt 40 -and $c.B -lt 60) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}
Write-Host "Button bounds: X: $minX to $maxX (width: $($maxX - $minX)), Y: $minY to $maxY (height: $($maxY - $minY))"

# Let's crop just this button and save it
$w = $maxX - $minX + 1
$h = $maxY - $minY + 1
$btnBmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($btnBmp)
$g.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0,0,$w,$h)), (New-Object System.Drawing.Rectangle($minX,$minY,$w,$h)), [System.Drawing.GraphicsUnit]::Pixel)
$btnBmp.Save("C:/Users/Uxdlab/.gemini/antigravity/scratch/northshoreclean/app/btn_only.png")
$g.Dispose()
$btnBmp.Dispose()
$bmp.Dispose()
Write-Host "Saved btn_only.png"

