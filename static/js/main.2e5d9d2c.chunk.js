(this["webpackJsonptrie-demo"]=this["webpackJsonptrie-demo"]||[]).push([[0],{103:function(e,r,s){},105:function(e,r,s){},193:function(e,r,s){"use strict";s.r(r);var n=s(0),o=s.n(n),t=s(9),i=s.n(t),p=(s(103),s(36)),a=(s(104),s(105),s(75)),E=s(198),T=s(201),c=s(199),u=s(200),m=s(61),l=s(195),w=s(196),d=E.a.TextArea,G=E.a.Search,g=T.a.Content,b=c.a.Panel;var h=function(){var e=Object(n.useState)("GET /applications/grants\nGET /applications/grants/:id\nDELETE /applications/grants/:id\nGET /authorizations\nGET /authorizations/:id\nPOST /authorizations\nPUT /authorizations/clients/:client_id\nPUT /authorizations/clients/:client_id/:fingerprint\nPATCH /authorizations/:id\nDELETE /authorizations/:id\nGET /applications/:client_id/tokens/:access_token\nPOST /applications/:client_id/tokens/:access_token\nDELETE /applications/:client_id/tokens/:access_token\nDELETE /applications/:client_id/grants/:access_token\n\nGET /events\nGET /repos/:owner/:repo/events\nGET /networks/:owner/:repo/events\nGET /orgs/:org/events\nGET /users/:username/received_events\nGET /users/:username/received_events/public\nGET /users/:username/events\nGET /users/:username/events/public\nGET /users/:username/events/orgs/:org\n\nGET /feeds\n\nGET /notifications\nGET /repos/:owner/:repo/notifications\nPUT /notifications\nPUT /repos/:owner/:repo/notifications\nGET /notifications/threads/:id\nPATCH /notifications/threads/:id\nGET /notifications/threads/:id/subscription\nPUT /notifications/threads/:id/subscription\nDELETE /notifications/threads/:id/subscription\n\nGET /repos/:owner/:repo/stargazers\nGET /users/:username/starred\nGET /user/starred\nGET /user/starred/:owner/:repo\nPUT /user/starred/:owner/:repo\nDELETE /user/starred/:owner/:repo\n\nGET /repos/:owner/:repo/subscribers\nGET /users/:username/subscriptions\nGET /user/subscriptions\nGET /repos/:owner/:repo/subscription\nPUT /repos/:owner/:repo/subscription\nDELETE /repos/:owner/:repo/subscription\nGET /user/subscriptions/:owner/:repo\nPUT /user/subscriptions/:owner/:repo\nDELETE /user/subscriptions/:owner/:repo\n\nGET /users/:username/gists\nGET /gists\nGET /gists/public\nGET /gists/starred\nGET /gists/:id\nGET /gists/:id/:sha\nPOST /gists\nPATCH /gists/:id\nGET /gists/:id/commits\nPUT /gists/:id/star\nDELETE /gists/:id/star\nGET /gists/:id/star\nPOST /gists/:id/forks\nGET /gists/:id/forks\nDELETE /gists/:id\n\nGET /gists/:gist_id/comments\nGET /gists/:gist_id/comments/:id\nPOST /gists/:gist_id/comments\nPATCH /gists/:gist_id/comments/:id\nDELETE /gists/:gist_id/comments/:id\n\nGET /repos/:owner/:repo/git/blobs/:sha\nPOST /repos/:owner/:repo/git/blobs\n\nGET /repos/:owner/:repo/git/commits/:sha\nPOST /repos/:owner/:repo/git/commits\n\nGET /repos/:owner/:repo/git/refs/:ref*\nGET /repos/:owner/:repo/git/refs\nPOST /repos/:owner/:repo/git/refs\nPATCH /repos/:owner/:repo/git/refs/:ref*\nDELETE /repos/:owner/:repo/git/refs/:ref*\n\nGET /repos/:owner/:repo/git/tags/:sha\nPOST /repos/:owner/:repo/git/tags\n\nGET /repos/:owner/:repo/git/trees/:sha\nPOST /repos/:owner/:repo/git/trees\n\nGET /integration/installations\nPOST /installations/:installation_id/access_tokens\n\nGET /installation/repositories\nPUT /installations/:installation_id/repositories/:repository_id\nDELETE /installations/:installation_id/repositories/:repository_id\n\nGET /issues\nGET /user/issues\nGET /orgs/:org/issues\nGET /repos/:owner/:repo/issues\nGET /repos/:owner/:repo/issues/:number\nPOST /repos/:owner/:repo/issues\nPATCH /repos/:owner/:repo/issues/:number\nPUT /repos/:owner/:repo/issues/:number/lock\nDELETE /repos/:owner/:repo/issues/:number/lock\n\nGET /repos/:owner/:repo/assignees\nGET /repos/:owner/:repo/assignees/:assignee\nPOST /repos/:owner/:repo/issues/:number/assignees\nDELETE /repos/:owner/:repo/issues/:number/assignees\n\nGET /repos/:owner/:repo/issues/:number/comments\nGET /repos/:owner/:repo/issues/comments\nGET /repos/:owner/:repo/issues/comments/:id\nPOST /repos/:owner/:repo/issues/:number/comments\nPATCH /repos/:owner/:repo/issues/comments/:id\nDELETE /repos/:owner/:repo/issues/comments/:id\n\nGET /repos/:owner/:repo/issues/:issue_number/events\nGET /repos/:owner/:repo/issues/events\nGET /repos/:owner/:repo/issues/events/:id\n\nGET /repos/:owner/:repo/labels\nGET /repos/:owner/:repo/labels/:name\nPOST /repos/:owner/:repo/labels\nPATCH /repos/:owner/:repo/labels/:name\nDELETE /repos/:owner/:repo/labels/:name\nGET /repos/:owner/:repo/issues/:number/labels\nPOST /repos/:owner/:repo/issues/:number/labels\nDELETE /repos/:owner/:repo/issues/:number/labels/:name\nPUT /repos/:owner/:repo/issues/:number/labels\nDELETE /repos/:owner/:repo/issues/:number/labels\nGET /repos/:owner/:repo/milestones/:number/labels\n\nGET /repos/:owner/:repo/milestones\nGET /repos/:owner/:repo/milestones/:number\nPOST /repos/:owner/:repo/milestones\nPATCH /repos/:owner/:repo/milestones/:number\nDELETE /repos/:owner/:repo/milestones/:number\n\nGET /repos/:owner/:repo/issues/:issue_number/timeline\n\nPOST /orgs/:org/migrations\nGET /orgs/:org/migrations\nGET /orgs/:org/migrations/:id\nGET /orgs/:org/migrations/:id/archive\nDELETE /orgs/:org/migrations/:id/archive\nDELETE /orgs/:org/migrations/:id/repos/:repo_name/lock\n\nPUT /repos/:owner/:repo/import\nGET /repos/:owner/:repo/import\nPATCH /repos/:owner/:repo/import\nGET /repos/:owner/:repo/import/authors\nPATCH /repos/:owner/:repo/import/authors/:author_id\nPATCH /:owner/:name/import/lfs\nGET /:owner/:name/import/large_files\nDELETE /repos/:owner/:repo/import\n\nGET /emojis\n\nGET /gitignore/templates\nGET /gitignore/templates/:template_name\n\nGET /licenses\nGET /licenses/:license\nGET /repos/:owner/:repo\nGET /repos/:owner/:repo/license\n\nPOST /markdown\nPOST /markdown/raw\n\nGET /meta\n\nGET /rate_limit\n\nGET /user/orgs\nGET /organizations\nGET /users/:username/orgs\nGET /orgs/:org\nPATCH /orgs/:org\n\nGET /orgs/:org/members\nGET /orgs/:org/members/:username\nDELETE /orgs/:org/members/:username\nGET /orgs/:org/public_members\nGET /orgs/:org/public_members/:username\nPUT /orgs/:org/public_members/:username\nDELETE /orgs/:org/public_members/:username\nGET /orgs/:org/memberships/:username\nPUT /orgs/:org/memberships/:username\nDELETE /orgs/:org/memberships/:username\nGET /orgs/:org/invitations\nGET /user/memberships/orgs\nGET /user/memberships/orgs/:org\nPATCH /user/memberships/orgs/:org\n\nGET /orgs/:org/outside_collaborators\nDELETE /orgs/:org/outside_collaborator/:username\nPUT /orgs/:org/outside_collaborator/:username\n\nGET /orgs/:org/teams\nGET /teams/:id\nPOST /orgs/:org/teams\nPATCH /teams/:id\nDELETE /teams/:id\nGET /teams/:id/members\nGET /teams/:id/members/:username\nPUT /teams/:id/members/:username\nDELETE /teams/:id/members/:username\nGET /teams/:id/memberships/:username\nPUT /teams/:id/memberships/:username\nDELETE /teams/:id/memberships/:username\nGET /teams/:id/repos\nGET /teams/:id/invitations\nGET /teams/:id/repos/:owner/:repo\nPUT /teams/:id/repos/:org/:repo\nDELETE /teams/:id/repos/:owner/:repo\nGET /user/teams\n\nGET /orgs/:org/hooks\nGET /orgs/:org/hooks/:id\nPOST /orgs/:org/hooks\nPATCH /orgs/:org/hooks/:id\nPOST /orgs/:org/hooks/:id/pings\nDELETE /orgs/:org/hooks/:id\n\nGET /orgs/:org/blocks\nGET /orgs/:org/blocks/:username\nPUT /orgs/:org/blocks/:username\nDELETE /user/:org/blocks/:username\n\nGET /repos/:owner/:repo/projects\nGET /orgs/:org/projects\nGET /projects/:id\nPOST /repos/:owner/:repo/projects\nPOST /orgs/:org/projects\nPATCH /projects/:id\nDELETE /projects/:id\n\nGET /projects/columns/:column_id/cards\nGET /projects/columns/cards/:id\nPOST /projects/columns/:column_id/cards\nPATCH /projects/columns/cards/:id\nDELETE /projects/columns/cards/:id\nPOST /projects/columns/cards/:id/moves\n\nGET /projects/:project_id/columns\nGET /projects/columns/:id\nPOST /projects/:project_id/columns\nPATCH /projects/columns/:id\nDELETE /projects/columns/:id\nPOST /projects/columns/:id/moves\n\nGET /repos/:owner/:repo/pulls\nGET /repos/:owner/:repo/pulls/:number\nPOST /repos/:owner/:repo/pulls\nPATCH /repos/:owner/:repo/pulls/:number\nGET /repos/:owner/:repo/pulls/:number/commits\nGET /repos/:owner/:repo/pulls/:number/files\nGET /repos/:owner/:repo/pulls/:number/merge\nPUT /repos/:owner/:repo/pulls/:number/merge\n\nGET /repos/:owner/:repo/pulls/:number/reviews\nGET /repos/:owner/:repo/pulls/:number/reviews/:id\nDELETE /repos/:owner/:repo/pulls/:number/reviews/:id\nGET /repos/:owner/:repo/pulls/:number/reviews/:id/comments\nPOST /repos/:owner/:repo/pulls/:number/reviews\nPOST /repos/:owner/:repo/pulls/:number/reviews/:id/events\nPUT /repos/:owner/:repo/pulls/:number/reviews/:id/dismissals\n\nGET /repos/:owner/:repo/pulls/:number/comments\nGET /repos/:owner/:repo/pulls/comments\nGET /repos/:owner/:repo/pulls/comments/:id\nPOST /repos/:owner/:repo/pulls/:number/comments\nPATCH /repos/:owner/:repo/pulls/comments/:id\nDELETE /repos/:owner/:repo/pulls/comments/:id\n\nGET /repos/:owner/:repo/pulls/:number/requested_reviewers\nPOST /repos/:owner/:repo/pulls/:number/requested_reviewers\nDELETE /repos/:owner/:repo/pulls/:number/requested_reviewers\n\nGET /repos/:owner/:repo/comments/:id/reactions\nPOST /repos/:owner/:repo/comments/:id/reactions\nGET /repos/:owner/:repo/issues/:number/reactions\nPOST /repos/:owner/:repo/issues/:number/reactions\nGET /repos/:owner/:repo/issues/comments/:id/reactions\nPOST /repos/:owner/:repo/issues/comments/:id/reactions\nGET /repos/:owner/:repo/pulls/comments/:id/reactions\nPOST /repos/:owner/:repo/pulls/comments/:id/reactions\nDELETE /reactions/:id\n\nGET /user/repos\nGET /users/:username/repos\nGET /orgs/:org/repos\nGET /repositories\nPOST /user/repos\nPOST /orgs/:org/repos\nPATCH /repos/:owner/:repo\nGET /repos/:owner/:repo/contributors\nGET /repos/:owner/:repo/languages\nGET /repos/:owner/:repo/teams\nGET /repos/:owner/:repo/tags\nDELETE /repos/:owner/:repo\n\nGET /repos/:owner/:repo/branches\nGET /repos/:owner/:repo/branches/:branch\nGET /repos/:owner/:repo/branches/:branch/protection\nPUT /repos/:owner/:repo/branches/:branch/protection\nDELETE /repos/:owner/:repo/branches/:branch/protection\nGET /repos/:owner/:repo/branches/:branch/protection/required_status_checks\nPATCH /repos/:owner/:repo/branches/:branch/protection/required_status_checks\nDELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks\nGET /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\nPUT /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\nPOST /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\nDELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\nGET /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews\nPATCH /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews\nDELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews\nGET /repos/:owner/:repo/branches/:branch/protection/restrictions\nDELETE /repos/:owner/:repo/branches/:branch/protection/restrictions\nGET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams\nPUT /repos/:owner/:repo/branches/:branch/protection/restrictions/teams\nPOST /repos/:owner/:repo/branches/:branch/protection/restrictions/teams\nDELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams\nGET /repos/:owner/:repo/branches/:branch/protection/restrictions/users\nPUT /repos/:owner/:repo/branches/:branch/protection/restrictions/users\nPOST /repos/:owner/:repo/branches/:branch/protection/restrictions/users\nDELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users\n\nGET /repos/:owner/:repo/collaborators\nGET /repos/:owner/:repo/collaborators/:username\nGET /repos/:owner/:repo/collaborators/:username/permission\nPUT /repos/:owner/:repo/collaborators/:username\nDELETE /repos/:owner/:repo/collaborators/:username\n\nGET /repos/:owner/:repo/comments\nGET /repos/:owner/:repo/commits/:ref/comments\nPOST /repos/:owner/:repo/commits/:sha/comments\nGET /repos/:owner/:repo/comments/:id\nPATCH /repos/:owner/:repo/comments/:id\nDELETE /repos/:owner/:repo/comments/:id\n\nGET /repositories/:repo_id/community/profile\n\nGET /repos/:owner/:repo/commits\nGET /repos/:owner/:repo/commits/:sha\n#GET /repos/:owner/:repo/commits/:ref\n#GET /repos/:owner/:repo/compare/:base...:head\n\nGET /repos/:owner/:repo/readme\nGET /repos/:owner/:repo/contents/:path*\nPUT /repos/:owner/:repo/contents/:path*\nDELETE /repos/:owner/:repo/contents/:path*\nGET /repos/:owner/:repo/:archive_format/:ref\n\nGET /repos/:owner/:repo/keys\nGET /repos/:owner/:repo/keys/:id\nPOST /repos/:owner/:repo/keys\nDELETE /repos/:owner/:repo/keys/:id\n\nGET /repos/:owner/:repo/deployments\nGET /repos/:owner/:repo/deployments/:deployment_id\nPOST /repos/:owner/:repo/deployments\nGET /repos/:owner/:repo/deployments/:id/statuses\nGET /repos/:owner/:repo/deployments/:id/statuses/:status_id\nPOST /repos/:owner/:repo/deployments/:id/statuses\n\nGET /repos/:owner/:repo/downloads\nGET /repos/:owner/:repo/downloads/:id\nDELETE /repos/:owner/:repo/downloads/:id\n\nGET /repos/:owner/:repo/forks\nPOST /repos/:owner/:repo/forks\n\nGET /repositories/:repo_id/invitations\nDELETE /repositories/:repo_id/invitations/:invitation_id\nPATCH /repositories/:repo_id/invitations/:invitation_id\nGET /user/repository_invitations\nPATCH /user/repository_invitations/:invitation_id\nDELETE /user/repository_invitations/:invitation_id\n\nPOST /repos/:owner/:repo/merges\n\nGET /repos/:owner/:repo/pages\nPOST /repos/:owner/:repo/pages/builds\nGET /repos/:owner/:repo/pages/builds\nGET /repos/:owner/:repo/pages/builds/latest\nGET /repos/:owner/:repo/pages/builds/:id\n\nGET /repos/:owner/:repo/releases\nGET /repos/:owner/:repo/releases/:id\nGET /repos/:owner/:repo/releases/latest\nGET /repos/:owner/:repo/releases/tags/:tag\nPOST /repos/:owner/:repo/releases\nPATCH /repos/:owner/:repo/releases/:id\nDELETE /repos/:owner/:repo/releases/:id\nGET /repos/:owner/:repo/releases/:id/assets\nGET /repos/:owner/:repo/releases/assets/:id\nPATCH /repos/:owner/:repo/releases/assets/:id\nDELETE /repos/:owner/:repo/releases/assets/:id\n\nGET /repos/:owner/:repo/stats/contributors\nGET /repos/:owner/:repo/stats/commit_activity\nGET /repos/:owner/:repo/stats/code_frequency\nGET /repos/:owner/:repo/stats/participation\nGET /repos/:owner/:repo/stats/punch_card\n\nPOST /repos/:owner/:repo/statuses/:sha\nGET /repos/:owner/:repo/commits/:ref/statuses\nGET /repos/:owner/:repo/commits/:ref/status\n\nGET /repos/:owner/:repo/traffic/popular/referrers\nGET /repos/:owner/:repo/traffic/popular/paths\nGET /repos/:owner/:repo/traffic/views\nGET /repos/:owner/:repo/traffic/clones\n\nGET /repos/:owner/:repo/hooks\nGET /repos/:owner/:repo/hooks/:id\nPOST /repos/:owner/:repo/hooks\nPATCH /repos/:owner/:repo/hooks/:id\nPOST /repos/:owner/:repo/hooks/:id/tests\nPOST /repos/:owner/:repo/hooks/:id/pings\nDELETE /repos/:owner/:repo/hooks/:id\n\nGET /search/repositories\nGET /search/commits\nGET /search/code\nGET /search/issues\nGET /search/users\nGET /legacy/issues/search/:owner/:repository/:state/:keyword\nGET /legacy/repos/search/:keyword\nGET /legacy/user/search/:keyword\nGET /legacy/user/email/:email\n\nGET /users/:username\nGET /user\nPATCH /user\nGET /users\n\nGET /user/emails\nPOST /user/emails\nDELETE /user/emails\n\nGET /users/:username/followers\nGET /user/followers\nGET /users/:username/following\nGET /user/following\nGET /user/following/:username\nGET /users/:username/following/:target_user\nPUT /user/following/:username\nDELETE /user/following/:username\n\nGET /users/:username/keys\nGET /user/keys\nGET /user/keys/:id\nPOST /user/keys\nDELETE /user/keys/:id\n\nGET /users/:username/gpg_keys\nGET /user/gpg_keys\nGET /user/gpg_keys/:id\nPOST /user/gpg_keys\nDELETE /user/gpg_keys/:id\n\nPUT /users/:username/site_admin\nDELETE /users/:username/site_admin\nPUT /users/:username/suspended\nDELETE /users/:username/suspended\n\nGET /user/blocks\nGET /user/blocks/:username\nPUT /user/blocks/:username\nDELETE /user/blocks/:username"),r=Object(p.a)(e,2),s=r[0],t=r[1],i=Object(n.useState)("/repos/jkeylu/trie-demo/readme"),E=Object(p.a)(i,2),h=E[0],P=E[1],_=Object(n.useState)(null),f=Object(p.a)(_,2),k=f[0],v=f[1],O=Object(n.useState)([]),D=Object(p.a)(O,2),S=D[0],L=D[1],y=Object(n.useState)([]),j=Object(p.a)(y,2),C=j[0],A=j[1];function H(e,r,s){var n={title:e.prefix,key:e.signature},t=Object.keys(e.children);t.length&&(n.children=[],t.forEach((function(o){var t=H(e.children[o],r,s+1);n.children.push(t)})));var i=e.signature,p=Object.keys(e.handlerMap);p.length&&(i=p.map((function(r){return o.a.createElement("p",null,e.handlerMap[r].handler())})));var a=!1;r&&r.length&&(r[s]===e&&(a=!0));return n.title=o.a.createElement(u.a,{title:i,mouseLeaveDelay:.5},o.a.createElement("span",{style:{backgroundColor:a?"#fdf731":"#fff"}},e.prefix)),n}return o.a.createElement(T.a,{className:"App"},o.a.createElement(g,null,o.a.createElement("div",{style:{padding:24,minHeight:380}},o.a.createElement(c.a,{defaultActiveKey:["2"]},o.a.createElement(b,{header:"\u8def\u7531",key:"1"},o.a.createElement(d,{value:s,autoSize:{maxRows:15},onChange:function(e){var r=e.target.value;return t(r)}}),o.a.createElement("div",{style:{marginTop:10}},o.a.createElement(m.a,{type:"primary",onClick:function(){var e=new a.PathHandlerMap;s.replace("\r","\n").split("\n").forEach((function(r){if(r=r.trim()){var s=r.split(" "),n=Object(p.a)(s,2),o=n[0],t=n[1];e.add(t,o,(function(){return r}))}})),v(e),console.log(e);var r=H(e.tree);L([r]),console.log(r)}},"\u751f\u6210"))),o.a.createElement(b,{header:"\u641c\u7d22",key:"2"},o.a.createElement(G,{value:h,enterButton:"\u641c\u7d22",onChange:function(e){var r=e.target.value;return P(r)},onSearch:function(){if(k){for(var e=k.lookupByRealPath(h),r=[e.signature],s=[e];e.parent;)s.unshift(e.parent),e=e.parent;var n=H(k.tree,s,0);L([n]),A(r)}}}))),o.a.createElement(l.a,{title:"\u524d\u7f00\u6811"},o.a.createElement(w.a,{treeData:S,expandedKeys:C,autoExpandParent:!0,onExpand:function(e){return A(e)}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,r,s){e.exports=s(193)}},[[98,1,2]]]);
//# sourceMappingURL=main.2e5d9d2c.chunk.js.map