# this is a file that can help you to deploy your Vue app fast!
# please note the 'CUSTOM' tag in this file.
# you need to make some changes for yourself to deploy successfully.

# file deploy.sh
#!/usr/bin/env sh

set -e

# build command
yarn build

# CUSTOM: this is the directory of the building output.
#         no need to change by default.
cd dist
cp index.html 404.html

# CUSTOM: if you are deploying to a custom domain,
#         set your domain in CNAME to avoid bugs (from GitHub Page service).
#         no need to change with default 'github.io' domain.
# echo 'docs.tacitech.cn' > CNAME

git init --initial-branch=development
git add -A
git commit -m 'Deploy to the GitHub Page service.'

# CUSTOM: change to the git address or https address of your target repo.
#         and you will probably never be able to push into my account lol.
# CUSTOM: and, you need to change the local branch name to the corresponding one.
#         mine is 'development', you can use your own if you have a different one (probably no need).
git push -f git@github.com:taci-tech/vue-next-boilerplate.git development:gh-pages

cd -