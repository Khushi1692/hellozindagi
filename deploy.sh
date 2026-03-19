#!/bin/bash

echo "Starting build..."

npm run build || exit 1

echo "Copying dist files..."
cp -r dist/* . || exit 1

echo "Adding files to git..."
git add . || exit 1

echo "Committing..."
git commit -m "add in testimonial and team  section" || exit 1

echo "Pushing to repo..."
git push || exit 1

echo "Updating index.html..."

cat << 'EOF' > index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hello-zindagi</title>
  </head>
  <body>
    <div id="root"></div>
     <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

echo "index.html updated successfully!"