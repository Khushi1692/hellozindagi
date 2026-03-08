#!/bin/bash

echo "Starting build..."

npm run build || exit 1

echo "Copying dist files..."
cp -r dist/* . || exit 1

echo "Adding files to git..."
git add . || exit 1

echo "Committing..."
git commit -m "button add auto deploy" || exit 1

echo "Pushing to repo..."
git push || exit 1

echo "Deployment completed successfully!"