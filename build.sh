#!/bin/bash

echo "Preparing content for local preview..."

QUARTZ_DIR="quartz"
CONTENT_DEST="$QUARTZ_DIR/content"
NOTES_SRC=(140A_lectures 140B_lectures ch1 ch2 ch3 ch4 ch5) 

# Clean and create destination
rm -rf "$CONTENT_DEST"
mkdir -p "$CONTENT_DEST"

# Copy content folders
echo "Copying notes folders..."
for src_folder in "${NOTES_SRC[@]}"; do
  if [ -d "$src_folder" ]; then
    cp -r "$src_folder" "$CONTENT_DEST/"
    echo "  Copied $src_folder"
  else
    echo "  Warning: Source folder $src_folder not found."
  fi
done
# Add lines here to copy any other specific asset folders if needed (e.g., cp -r images "$CONTENT_DEST/")

echo "Content prepared. Starting Quartz server..."

cd "$QUARTZ_DIR" || exit 1
npm install # Run install just in case
npx quartz build --serve

echo "Cleaning up copied content..."
rm -rf "./content"