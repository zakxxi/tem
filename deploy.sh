#!/bin/sh

git checkout master
git pull
harp compile . /var/www/
cp -rf audio /var/www/

