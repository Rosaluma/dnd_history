# dnd_history
This is the history of our D&amp;D games

Here's the commands I did to add an image:

  478  cd ~/github/dnd_history/
  479  ls
  480  git add .
  481  pwd
  482  touch images/crap.jpg
  483  git status
  484  git add .
  485  git status
  486  git commit --message="I added a new file"
  487  git push 
  488  history


Here's what you'd do

git main
git pull # to pull main to current head

git checkout -b NEW_BRANCH_TO_TEST
git push origin NEW_BRANCH_TO_TEST

# then go to https://github.com/Rosaluma/dnd_history/settings/pages and change the deployment branch to your new branch

add images or change files

git add .
git commit --message="I added crap"

git push origin NEW_BRANCH_TO_TEST

open up a PR to merge NEW_BRANCH_TO_TEST into main and merge the PR

then 

git checkout main
git pull # this will  bring main up to current (your changes that were just merged in)
