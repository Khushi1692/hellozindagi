#!/bin/bash

echo "Starting build..."

npm run build || exit 1

echo "Copying dist files..."
cp -r dist/* . || exit 1

echo "Creating 404.html for SPA routing..."
cp index.html 404.html 

echo "Adding files to git..."
git add . || exit 1

echo "Committing..."
git commit -m "changes for all page seo" || exit 1

echo "Pushing to repo..."
git push || exit 1

echo "Deployment and routing setup complete!"