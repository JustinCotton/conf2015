#!/bin/bash

set -ex

# Start in website/ even if run from root directory
cd "$(dirname "$0")"

cd ../../conf2014-gh-pages
git checkout -- .
git clean -dfx
git fetch
git rebase
rm -Rf -- *
cd ../conf2014/website
node server/generate.js
cp -R build/conf2014/* ../../conf2014-gh-pages/
rm -Rf build/
cd ../../conf2014-gh-pages
git add --all
git commit -m "update website"
git push
cd ../conf2014/website
