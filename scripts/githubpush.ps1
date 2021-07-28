$GhPAT = "${env:GITHUBPAT}"
git remote add gh "https://atlefren:$GhPAT@github.com/Norkart/L.TileLayer.Webatlas.git"
git push -u gh HEAD:master --force
git remote remove gh
