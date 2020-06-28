export const githubRoutes = `GET /applications/grants
GET /applications/grants/:id
DELETE /applications/grants/:id
GET /authorizations
GET /authorizations/:id
POST /authorizations
PUT /authorizations/clients/:client_id
PUT /authorizations/clients/:client_id/:fingerprint
PATCH /authorizations/:id
DELETE /authorizations/:id
GET /applications/:client_id/tokens/:access_token
POST /applications/:client_id/tokens/:access_token
DELETE /applications/:client_id/tokens/:access_token
DELETE /applications/:client_id/grants/:access_token

GET /events
GET /repos/:owner/:repo/events
GET /networks/:owner/:repo/events
GET /orgs/:org/events
GET /users/:username/received_events
GET /users/:username/received_events/public
GET /users/:username/events
GET /users/:username/events/public
GET /users/:username/events/orgs/:org

GET /feeds

GET /notifications
GET /repos/:owner/:repo/notifications
PUT /notifications
PUT /repos/:owner/:repo/notifications
GET /notifications/threads/:id
PATCH /notifications/threads/:id
GET /notifications/threads/:id/subscription
PUT /notifications/threads/:id/subscription
DELETE /notifications/threads/:id/subscription

GET /repos/:owner/:repo/stargazers
GET /users/:username/starred
GET /user/starred
GET /user/starred/:owner/:repo
PUT /user/starred/:owner/:repo
DELETE /user/starred/:owner/:repo

GET /repos/:owner/:repo/subscribers
GET /users/:username/subscriptions
GET /user/subscriptions
GET /repos/:owner/:repo/subscription
PUT /repos/:owner/:repo/subscription
DELETE /repos/:owner/:repo/subscription
GET /user/subscriptions/:owner/:repo
PUT /user/subscriptions/:owner/:repo
DELETE /user/subscriptions/:owner/:repo

GET /users/:username/gists
GET /gists
GET /gists/public
GET /gists/starred
GET /gists/:id
GET /gists/:id/:sha
POST /gists
PATCH /gists/:id
GET /gists/:id/commits
PUT /gists/:id/star
DELETE /gists/:id/star
GET /gists/:id/star
POST /gists/:id/forks
GET /gists/:id/forks
DELETE /gists/:id

GET /gists/:gist_id/comments
GET /gists/:gist_id/comments/:id
POST /gists/:gist_id/comments
PATCH /gists/:gist_id/comments/:id
DELETE /gists/:gist_id/comments/:id

GET /repos/:owner/:repo/git/blobs/:sha
POST /repos/:owner/:repo/git/blobs

GET /repos/:owner/:repo/git/commits/:sha
POST /repos/:owner/:repo/git/commits

GET /repos/:owner/:repo/git/refs/:ref*
GET /repos/:owner/:repo/git/refs
POST /repos/:owner/:repo/git/refs
PATCH /repos/:owner/:repo/git/refs/:ref*
DELETE /repos/:owner/:repo/git/refs/:ref*

GET /repos/:owner/:repo/git/tags/:sha
POST /repos/:owner/:repo/git/tags

GET /repos/:owner/:repo/git/trees/:sha
POST /repos/:owner/:repo/git/trees

GET /integration/installations
POST /installations/:installation_id/access_tokens

GET /installation/repositories
PUT /installations/:installation_id/repositories/:repository_id
DELETE /installations/:installation_id/repositories/:repository_id

GET /issues
GET /user/issues
GET /orgs/:org/issues
GET /repos/:owner/:repo/issues
GET /repos/:owner/:repo/issues/:number
POST /repos/:owner/:repo/issues
PATCH /repos/:owner/:repo/issues/:number
PUT /repos/:owner/:repo/issues/:number/lock
DELETE /repos/:owner/:repo/issues/:number/lock

GET /repos/:owner/:repo/assignees
GET /repos/:owner/:repo/assignees/:assignee
POST /repos/:owner/:repo/issues/:number/assignees
DELETE /repos/:owner/:repo/issues/:number/assignees

GET /repos/:owner/:repo/issues/:number/comments
GET /repos/:owner/:repo/issues/comments
GET /repos/:owner/:repo/issues/comments/:id
POST /repos/:owner/:repo/issues/:number/comments
PATCH /repos/:owner/:repo/issues/comments/:id
DELETE /repos/:owner/:repo/issues/comments/:id

GET /repos/:owner/:repo/issues/:issue_number/events
GET /repos/:owner/:repo/issues/events
GET /repos/:owner/:repo/issues/events/:id

GET /repos/:owner/:repo/labels
GET /repos/:owner/:repo/labels/:name
POST /repos/:owner/:repo/labels
PATCH /repos/:owner/:repo/labels/:name
DELETE /repos/:owner/:repo/labels/:name
GET /repos/:owner/:repo/issues/:number/labels
POST /repos/:owner/:repo/issues/:number/labels
DELETE /repos/:owner/:repo/issues/:number/labels/:name
PUT /repos/:owner/:repo/issues/:number/labels
DELETE /repos/:owner/:repo/issues/:number/labels
GET /repos/:owner/:repo/milestones/:number/labels

GET /repos/:owner/:repo/milestones
GET /repos/:owner/:repo/milestones/:number
POST /repos/:owner/:repo/milestones
PATCH /repos/:owner/:repo/milestones/:number
DELETE /repos/:owner/:repo/milestones/:number

GET /repos/:owner/:repo/issues/:issue_number/timeline

POST /orgs/:org/migrations
GET /orgs/:org/migrations
GET /orgs/:org/migrations/:id
GET /orgs/:org/migrations/:id/archive
DELETE /orgs/:org/migrations/:id/archive
DELETE /orgs/:org/migrations/:id/repos/:repo_name/lock

PUT /repos/:owner/:repo/import
GET /repos/:owner/:repo/import
PATCH /repos/:owner/:repo/import
GET /repos/:owner/:repo/import/authors
PATCH /repos/:owner/:repo/import/authors/:author_id
PATCH /:owner/:name/import/lfs
GET /:owner/:name/import/large_files
DELETE /repos/:owner/:repo/import

GET /emojis

GET /gitignore/templates
GET /gitignore/templates/:template_name

GET /licenses
GET /licenses/:license
GET /repos/:owner/:repo
GET /repos/:owner/:repo/license

POST /markdown
POST /markdown/raw

GET /meta

GET /rate_limit

GET /user/orgs
GET /organizations
GET /users/:username/orgs
GET /orgs/:org
PATCH /orgs/:org

GET /orgs/:org/members
GET /orgs/:org/members/:username
DELETE /orgs/:org/members/:username
GET /orgs/:org/public_members
GET /orgs/:org/public_members/:username
PUT /orgs/:org/public_members/:username
DELETE /orgs/:org/public_members/:username
GET /orgs/:org/memberships/:username
PUT /orgs/:org/memberships/:username
DELETE /orgs/:org/memberships/:username
GET /orgs/:org/invitations
GET /user/memberships/orgs
GET /user/memberships/orgs/:org
PATCH /user/memberships/orgs/:org

GET /orgs/:org/outside_collaborators
DELETE /orgs/:org/outside_collaborator/:username
PUT /orgs/:org/outside_collaborator/:username

GET /orgs/:org/teams
GET /teams/:id
POST /orgs/:org/teams
PATCH /teams/:id
DELETE /teams/:id
GET /teams/:id/members
GET /teams/:id/members/:username
PUT /teams/:id/members/:username
DELETE /teams/:id/members/:username
GET /teams/:id/memberships/:username
PUT /teams/:id/memberships/:username
DELETE /teams/:id/memberships/:username
GET /teams/:id/repos
GET /teams/:id/invitations
GET /teams/:id/repos/:owner/:repo
PUT /teams/:id/repos/:org/:repo
DELETE /teams/:id/repos/:owner/:repo
GET /user/teams

GET /orgs/:org/hooks
GET /orgs/:org/hooks/:id
POST /orgs/:org/hooks
PATCH /orgs/:org/hooks/:id
POST /orgs/:org/hooks/:id/pings
DELETE /orgs/:org/hooks/:id

GET /orgs/:org/blocks
GET /orgs/:org/blocks/:username
PUT /orgs/:org/blocks/:username
DELETE /user/:org/blocks/:username

GET /repos/:owner/:repo/projects
GET /orgs/:org/projects
GET /projects/:id
POST /repos/:owner/:repo/projects
POST /orgs/:org/projects
PATCH /projects/:id
DELETE /projects/:id

GET /projects/columns/:column_id/cards
GET /projects/columns/cards/:id
POST /projects/columns/:column_id/cards
PATCH /projects/columns/cards/:id
DELETE /projects/columns/cards/:id
POST /projects/columns/cards/:id/moves

GET /projects/:project_id/columns
GET /projects/columns/:id
POST /projects/:project_id/columns
PATCH /projects/columns/:id
DELETE /projects/columns/:id
POST /projects/columns/:id/moves

GET /repos/:owner/:repo/pulls
GET /repos/:owner/:repo/pulls/:number
POST /repos/:owner/:repo/pulls
PATCH /repos/:owner/:repo/pulls/:number
GET /repos/:owner/:repo/pulls/:number/commits
GET /repos/:owner/:repo/pulls/:number/files
GET /repos/:owner/:repo/pulls/:number/merge
PUT /repos/:owner/:repo/pulls/:number/merge

GET /repos/:owner/:repo/pulls/:number/reviews
GET /repos/:owner/:repo/pulls/:number/reviews/:id
DELETE /repos/:owner/:repo/pulls/:number/reviews/:id
GET /repos/:owner/:repo/pulls/:number/reviews/:id/comments
POST /repos/:owner/:repo/pulls/:number/reviews
POST /repos/:owner/:repo/pulls/:number/reviews/:id/events
PUT /repos/:owner/:repo/pulls/:number/reviews/:id/dismissals

GET /repos/:owner/:repo/pulls/:number/comments
GET /repos/:owner/:repo/pulls/comments
GET /repos/:owner/:repo/pulls/comments/:id
POST /repos/:owner/:repo/pulls/:number/comments
PATCH /repos/:owner/:repo/pulls/comments/:id
DELETE /repos/:owner/:repo/pulls/comments/:id

GET /repos/:owner/:repo/pulls/:number/requested_reviewers
POST /repos/:owner/:repo/pulls/:number/requested_reviewers
DELETE /repos/:owner/:repo/pulls/:number/requested_reviewers

GET /repos/:owner/:repo/comments/:id/reactions
POST /repos/:owner/:repo/comments/:id/reactions
GET /repos/:owner/:repo/issues/:number/reactions
POST /repos/:owner/:repo/issues/:number/reactions
GET /repos/:owner/:repo/issues/comments/:id/reactions
POST /repos/:owner/:repo/issues/comments/:id/reactions
GET /repos/:owner/:repo/pulls/comments/:id/reactions
POST /repos/:owner/:repo/pulls/comments/:id/reactions
DELETE /reactions/:id

GET /user/repos
GET /users/:username/repos
GET /orgs/:org/repos
GET /repositories
POST /user/repos
POST /orgs/:org/repos
PATCH /repos/:owner/:repo
GET /repos/:owner/:repo/contributors
GET /repos/:owner/:repo/languages
GET /repos/:owner/:repo/teams
GET /repos/:owner/:repo/tags
DELETE /repos/:owner/:repo

GET /repos/:owner/:repo/branches
GET /repos/:owner/:repo/branches/:branch
GET /repos/:owner/:repo/branches/:branch/protection
PUT /repos/:owner/:repo/branches/:branch/protection
DELETE /repos/:owner/:repo/branches/:branch/protection
GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks
PATCH /repos/:owner/:repo/branches/:branch/protection/required_status_checks
DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks
GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
PUT /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
POST /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
GET /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
PATCH /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
DELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
GET /repos/:owner/:repo/branches/:branch/protection/restrictions
DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions
GET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams
PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/teams
POST /repos/:owner/:repo/branches/:branch/protection/restrictions/teams
DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams
GET /repos/:owner/:repo/branches/:branch/protection/restrictions/users
PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/users
POST /repos/:owner/:repo/branches/:branch/protection/restrictions/users
DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users

GET /repos/:owner/:repo/collaborators
GET /repos/:owner/:repo/collaborators/:username
GET /repos/:owner/:repo/collaborators/:username/permission
PUT /repos/:owner/:repo/collaborators/:username
DELETE /repos/:owner/:repo/collaborators/:username

GET /repos/:owner/:repo/comments
GET /repos/:owner/:repo/commits/:ref/comments
POST /repos/:owner/:repo/commits/:sha/comments
GET /repos/:owner/:repo/comments/:id
PATCH /repos/:owner/:repo/comments/:id
DELETE /repos/:owner/:repo/comments/:id

GET /repositories/:repo_id/community/profile

GET /repos/:owner/:repo/commits
GET /repos/:owner/:repo/commits/:sha
#GET /repos/:owner/:repo/commits/:ref
#GET /repos/:owner/:repo/compare/:base...:head

GET /repos/:owner/:repo/readme
GET /repos/:owner/:repo/contents/:path*
PUT /repos/:owner/:repo/contents/:path*
DELETE /repos/:owner/:repo/contents/:path*
GET /repos/:owner/:repo/:archive_format/:ref

GET /repos/:owner/:repo/keys
GET /repos/:owner/:repo/keys/:id
POST /repos/:owner/:repo/keys
DELETE /repos/:owner/:repo/keys/:id

GET /repos/:owner/:repo/deployments
GET /repos/:owner/:repo/deployments/:deployment_id
POST /repos/:owner/:repo/deployments
GET /repos/:owner/:repo/deployments/:id/statuses
GET /repos/:owner/:repo/deployments/:id/statuses/:status_id
POST /repos/:owner/:repo/deployments/:id/statuses

GET /repos/:owner/:repo/downloads
GET /repos/:owner/:repo/downloads/:id
DELETE /repos/:owner/:repo/downloads/:id

GET /repos/:owner/:repo/forks
POST /repos/:owner/:repo/forks

GET /repositories/:repo_id/invitations
DELETE /repositories/:repo_id/invitations/:invitation_id
PATCH /repositories/:repo_id/invitations/:invitation_id
GET /user/repository_invitations
PATCH /user/repository_invitations/:invitation_id
DELETE /user/repository_invitations/:invitation_id

POST /repos/:owner/:repo/merges

GET /repos/:owner/:repo/pages
POST /repos/:owner/:repo/pages/builds
GET /repos/:owner/:repo/pages/builds
GET /repos/:owner/:repo/pages/builds/latest
GET /repos/:owner/:repo/pages/builds/:id

GET /repos/:owner/:repo/releases
GET /repos/:owner/:repo/releases/:id
GET /repos/:owner/:repo/releases/latest
GET /repos/:owner/:repo/releases/tags/:tag
POST /repos/:owner/:repo/releases
PATCH /repos/:owner/:repo/releases/:id
DELETE /repos/:owner/:repo/releases/:id
GET /repos/:owner/:repo/releases/:id/assets
GET /repos/:owner/:repo/releases/assets/:id
PATCH /repos/:owner/:repo/releases/assets/:id
DELETE /repos/:owner/:repo/releases/assets/:id

GET /repos/:owner/:repo/stats/contributors
GET /repos/:owner/:repo/stats/commit_activity
GET /repos/:owner/:repo/stats/code_frequency
GET /repos/:owner/:repo/stats/participation
GET /repos/:owner/:repo/stats/punch_card

POST /repos/:owner/:repo/statuses/:sha
GET /repos/:owner/:repo/commits/:ref/statuses
GET /repos/:owner/:repo/commits/:ref/status

GET /repos/:owner/:repo/traffic/popular/referrers
GET /repos/:owner/:repo/traffic/popular/paths
GET /repos/:owner/:repo/traffic/views
GET /repos/:owner/:repo/traffic/clones

GET /repos/:owner/:repo/hooks
GET /repos/:owner/:repo/hooks/:id
POST /repos/:owner/:repo/hooks
PATCH /repos/:owner/:repo/hooks/:id
POST /repos/:owner/:repo/hooks/:id/tests
POST /repos/:owner/:repo/hooks/:id/pings
DELETE /repos/:owner/:repo/hooks/:id

GET /search/repositories
GET /search/commits
GET /search/code
GET /search/issues
GET /search/users
GET /legacy/issues/search/:owner/:repository/:state/:keyword
GET /legacy/repos/search/:keyword
GET /legacy/user/search/:keyword
GET /legacy/user/email/:email

GET /users/:username
GET /user
PATCH /user
GET /users

GET /user/emails
POST /user/emails
DELETE /user/emails

GET /users/:username/followers
GET /user/followers
GET /users/:username/following
GET /user/following
GET /user/following/:username
GET /users/:username/following/:target_user
PUT /user/following/:username
DELETE /user/following/:username

GET /users/:username/keys
GET /user/keys
GET /user/keys/:id
POST /user/keys
DELETE /user/keys/:id

GET /users/:username/gpg_keys
GET /user/gpg_keys
GET /user/gpg_keys/:id
POST /user/gpg_keys
DELETE /user/gpg_keys/:id

PUT /users/:username/site_admin
DELETE /users/:username/site_admin
PUT /users/:username/suspended
DELETE /users/:username/suspended

GET /user/blocks
GET /user/blocks/:username
PUT /user/blocks/:username
DELETE /user/blocks/:username`