#!/bin/bash

SOURCE_PATH=../genomics-web/docs/json-schema-project/json
TARGET_DIR=json

echo "Removing current..."
rm -rf $TARGET_DIR
echo "Copying..."
cp -r $SOURCE_PATH ./
