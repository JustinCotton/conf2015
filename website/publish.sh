#!/bin/bash

set -ex

# Start in website/ even if run from root directory
cd "$(dirname "$0")"

cd ../../conf2015-gh-pages
git checkout -- .
git clean -dfx
git fetch
git rebase
rm -Rf -- *
cd ../conf2015/website
node server/generate.js
cp -R build/conf2015/* ../../conf2015-gh-pages/
rm -Rf build/
cd ../../conf2015-gh-pages
git add --all
git commit -m "update website"
git push
cd ../conf2015/website
