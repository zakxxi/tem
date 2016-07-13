#!/bin/sh

git checkout master
git pull
harp compile . /var/www/

