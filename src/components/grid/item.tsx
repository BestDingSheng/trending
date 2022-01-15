import moment from 'moment';
import Star from '@/components/icons/star';
import Fork from '@/components/icons/fork';
import Issue from '@/components/icons/issue';
import {color} from '@/github'
import './styles.css';

const GridItem = ({repository}) => {
  const {language, owner, name, created_at, description, stargazers_count,} = repository || {}
  const {html_url, avatar_url, login} = owner || {}
  const languageColor = color[language];
  return (
    
    <div className="grid-item-container">
        <div className="grid-item-body">
          <div className="author-header clearfix">
            <a
              href={html_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="author-img">
                <img
                  src={avatar_url}
                  onError={(e) => {
                    e.target.src = '/img/logo.svg';
                  }}
                  alt={login}
                />
              </div>
              <div className="author-details">
                <h5>{login}</h5>
                <p className="small text-muted">View Profile</p>
              </div>
            </a>
          </div>
          {/* header */}
          <div className="repo-header">
            <h5>
              <a
                href={html_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="repo-name">{name}</span>
              </a>
            </h5>
            <p
              className="repo-meta text-muted small"
              style={{ marginBottom: '10px' }}
            >
              Built by &middot;{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={html_url}
              >
                {login}
              </a>{' '}
              &middot;{' '}
              {moment(created_at).format('MMMM D, YYYY')}
            </p>
          </div>
          <div className="repo-body">
            <p>
              {(description &&
                description.slice(0, 140)) ||
                'No description given.'}
            </p>
          </div>
          {/* footer */}
          <div className="repo-footer">
            {language && (
              <span className="d-inline-flex align-items-center mr-3">
                <span
                  className="repo-language-color"
                  style={{
                    backgroundColor: languageColor
                      ? languageColor.color
                      : '#e8e8e8',
                  }}
                ></span>
                <span itemProp="programmingLanguage">
                  {language}
                </span>
              </span>
            )}
            <a
              className="muted-link d-inline-block mr-3"
              href={`${html_url}/stargazers`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Star />
              {stargazers_count
                ? stargazers_count.toLocaleString()
                : 0}
            </a>
            <a
              className="muted-link d-inline-block mr-3"
              href={`${repository.html_url}/network/members`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Fork />
              {repository.forks
                ? repository.forks.toLocaleString()
                : 0}
            </a>
            <a
              className="muted-link d-inline-block mr-3"
              href={`${repository.html_url}/issues`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Issue />
              {repository.open_issues
                ? repository.open_issues.toLocaleString()
                : 0}
            </a>
          </div>
        </div>
      </div>
  )
}

export default GridItem;
