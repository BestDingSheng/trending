import styled from 'styled-components';
import { Button, Input } from 'antd';
import { history } from 'umi';
import { Fragment } from 'react';

const TokenContainer = styled.div`
  background: #fff;
  padding: 25px 30px;
  border-radius: 20px;
  margin: auto;
  max-width: 700px;
`;

const Placeholder = styled.div`
  height: 120px;
  width: 100%;
`;

import './styles.css';

const OptionsForm = () => {
  return (
    <Fragment>
      <Placeholder></Placeholder>
      <TokenContainer>
        <div className="options-form">
          <div className="form-field">
            <h2>Add the Token</h2>
            <p className="text-muted">
              Generate a token and add it below to avoid hitting the rate limit.
            </p>
            <hr />
            <ul>
              <li>
                Go to the
                <a
                  href="https://github.com/settings/tokens/new?description=GitHunt&scopes=public_repo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-external-link mr-1"></i>Settings{' '}
                  <i className="fa fa-angle-right"></i> Personal Access Tokens{' '}
                  <i className="fa fa-angle-right"></i> New personal access
                  token
                </a>{' '}
                of your github profile
              </li>
              <li>
                Click <span>Generate Token</span>.
              </li>
              <li>
                You will be presented with the generated token. Copy the token
                and add it below
              </li>
            </ul>
            <Input></Input>
          </div>
          <Button type="primary" block className="btn">
            <i className="fa fa-cog mr-2"></i>
            Save Token
          </Button>
          <Button
            block
            className="btn"
            style={{ marginTop: '10px' }}
            onClick={() => {
              history.push('/');
            }}
          >
            <i className="fa fa-arrow-left mr-2"></i>
            Go Home
          </Button>
        </div>
      </TokenContainer>
    </Fragment>
  );
};

export default OptionsForm;
