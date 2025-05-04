# generate sitemap
echo "[deploy] Generating sitemap..."
node generate-sitemap.js

echo "[deploy] Building project..."
npm run build

this=$(pwd)
echo "[deploy] Copying files to GitHub Pages repo..."
cp -r dist/* "/mnt/Storage-ssd/projects/Personal projects/wkdkavishka.github.io/"

cd "/mnt/Storage-ssd/projects/Personal projects/wkdkavishka.github.io/"
echo "[deploy] Adding changes to git..."
git add .
echo "[deploy] Committing changes..."
git commit -m "auto deploy $(date '+%Y-%m-%d %H:%M:%S')"
git config --global pull.rebase true
echo "[deploy] Pulling latest changes..."
git pull
echo "[deploy] Pushing to GitHub..."
git push
echo "[deploy] Deployment complete."
