#! /bin/bash
set -ev

export HEROKU_API_KEY=$HEROKU_AUTH

echo $HEROKU_AUTH | docker login --username=_ --password-stdin registry.heroku.com



if [ "${TRAVIS_BRANCH}" = "master" ]; then

  heroku container:push --app=service--provider-app web 
  heroku container:release --app=service--provider-app web

fi