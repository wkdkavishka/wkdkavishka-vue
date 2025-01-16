npm run build
this = $(pwd)
cp -r dist/* "/mnt/Storage-ssd/projects/Personal projects/wkdkavishka.github.io/"
cd "/mnt/Storage-ssd/projects/Personal projects/wkdkavishka.github.io/"
git add .
git commit -m "auto deploy $(date '+%Y-%m-%d %H:%M:%S')"
git config --global pull.rebase true
git pull 
git push
