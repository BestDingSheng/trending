import { useState, useCallback } from 'react';
import { useImmer } from 'use-immer';

const obj = {
  id: 445599288,
  node_id: 'R_kgDOGo9OOA',
  name: 'faker',
  full_name: 'faker-js/faker',
  private: false,
  owner: {
    login: 'faker-js',
    id: 97165289,
    node_id: 'O_kgDOBcqf6Q',
    avatar_url: 'https://avatars.githubusercontent.com/u/97165289?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/faker-js',
    html_url: 'https://github.com/faker-js',
    followers_url: 'https://api.github.com/users/faker-js/followers',
    following_url:
      'https://api.github.com/users/faker-js/following{/other_user}',
    gists_url: 'https://api.github.com/users/faker-js/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/faker-js/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/faker-js/subscriptions',
    organizations_url: 'https://api.github.com/users/faker-js/orgs',
    repos_url: 'https://api.github.com/users/faker-js/repos',
    events_url: 'https://api.github.com/users/faker-js/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/faker-js/received_events',
    type: 'Organization',
    site_admin: false,
  },
  html_url: 'https://github.com/faker-js/faker',
  description:
    'Generate massive amounts of fake data in the browser and node.js',
  fork: false,
  url: 'https://api.github.com/repos/faker-js/faker',
  forks_url: 'https://api.github.com/repos/faker-js/faker/forks',
  keys_url: 'https://api.github.com/repos/faker-js/faker/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/faker-js/faker/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/faker-js/faker/teams',
  hooks_url: 'https://api.github.com/repos/faker-js/faker/hooks',
  issue_events_url:
    'https://api.github.com/repos/faker-js/faker/issues/events{/number}',
  events_url: 'https://api.github.com/repos/faker-js/faker/events',
  assignees_url: 'https://api.github.com/repos/faker-js/faker/assignees{/user}',
  branches_url: 'https://api.github.com/repos/faker-js/faker/branches{/branch}',
  tags_url: 'https://api.github.com/repos/faker-js/faker/tags',
  blobs_url: 'https://api.github.com/repos/faker-js/faker/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/faker-js/faker/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/faker-js/faker/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/faker-js/faker/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/faker-js/faker/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/faker-js/faker/languages',
  stargazers_url: 'https://api.github.com/repos/faker-js/faker/stargazers',
  contributors_url: 'https://api.github.com/repos/faker-js/faker/contributors',
  subscribers_url: 'https://api.github.com/repos/faker-js/faker/subscribers',
  subscription_url: 'https://api.github.com/repos/faker-js/faker/subscription',
  commits_url: 'https://api.github.com/repos/faker-js/faker/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/faker-js/faker/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/faker-js/faker/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/faker-js/faker/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/faker-js/faker/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/faker-js/faker/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/faker-js/faker/merges',
  archive_url:
    'https://api.github.com/repos/faker-js/faker/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/faker-js/faker/downloads',
  issues_url: 'https://api.github.com/repos/faker-js/faker/issues{/number}',
  pulls_url: 'https://api.github.com/repos/faker-js/faker/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/faker-js/faker/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/faker-js/faker/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/faker-js/faker/labels{/name}',
  releases_url: 'https://api.github.com/repos/faker-js/faker/releases{/id}',
  deployments_url: 'https://api.github.com/repos/faker-js/faker/deployments',
  created_at: '2022-01-07T17:22:27Z',
  updated_at: '2022-01-14T04:41:13Z',
  pushed_at: '2022-01-14T04:31:19Z',
  git_url: 'git://github.com/faker-js/faker.git',
  ssh_url: 'git@github.com:faker-js/faker.git',
  clone_url: 'https://github.com/faker-js/faker.git',
  svn_url: 'https://github.com/faker-js/faker',
  homepage: 'https://fakerjs.dev',
  size: 19280,
  stargazers_count: 1515,
  watchers_count: 1515,
  language: 'JavaScript',
  has_issues: true,
  has_projects: false,
  has_downloads: true,
  has_wiki: false,
  has_pages: false,
  forks_count: 150,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 51,
  license: {
    key: 'other',
    name: 'Other',
    spdx_id: 'NOASSERTION',
    url: null,
    node_id: 'MDc6TGljZW5zZTA=',
  },
  allow_forking: true,
  is_template: false,
  topics: ['browser', 'data', 'fake', 'faker', 'javascript', 'nodejs'],
  visibility: 'public',
  forks: 150,
  open_issues: 51,
  watchers: 1515,
  default_branch: 'main',
  score: 1,
};

const initState = {
  list: [obj, obj, obj],
};

export default function useAuthModel() {
  const [user, setUser] = useImmer(initState);
  return {
    user,
    setUser,
  };
}
