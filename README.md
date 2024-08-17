# My (old) Website
`Update Aug 2024`
-> not published anymore. Will have a new website at some point.

## Domains
[**maria-scholz.com**](https://www.maria-scholz.com) / [**mariascholz.com**](https://www.mariascholz.com)

## Installation

All files were uploaded to this Github repository. Since I am hosting my page on Github, I only needed to activate the Github Pages feature.

## Testing

I use https://whatwg.org/validator/ regularly to probe my website for HTML Conformance.  

## Deployment

I use VSCode to build on my app files locally. I have it hooked up to my Github Repo, so all I gotta do is the following steps when deploying a new iteration: 

1. `git checkout -b [branch_name]` create a new branch for my iteration commit (the branch is named after the calender week of the iteration, eg. _"week_43_update"_)
2. `git add .` adds all edited files to the staging area
3. `git commit -m "[commit message]"` commits staged files with a message
4. `git push origin [branch_name]` (or `git push` for short) pushes my local files to Github repo
5. create **Pull Request** on github and adding my mentors as reviewers for their feedback
6. after review merge and close the branch on github
7. `git checkout main` change back into local main branch
8. `git fetch --prune` syncs remote branches with local
9. `git pull origin main` syncs my local main with Github repo to be rebased
10. `git branch -D [branch_name]` deletes the previously created iteration branch 

I can just repeat these steps every week when I want to deploy changes made to my website. 

## Hosting

At the moment I use Github Pages for hosting. If I want to scale it up I might consider switching to **Vercel** or **GCP** for hosting.





