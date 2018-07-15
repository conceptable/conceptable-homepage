#! /bin/bash -eu

# git config user.name $CD_GIT_AGENT_NAME
# git config user.email $CD_GIT_AGENT_EMAIL

echo "Cloning repository"
git clone --single-branch git@github.com:conceptable/conceptable.github.io.git tmp

rm -rf tmp/*
cp -r dist/* tmp

cd tmp

git add -A .
if git diff --cached --exit-code; then
  echo "No changes"
  exit 0
fi

echo "Committing changes"
git commit -m "[Auto] Update homepage"
git push origin master

echo "Cleaning up"
cd ..
rm -rf tmp

echo "Published successfully"
