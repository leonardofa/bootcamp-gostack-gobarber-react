import React, { Component } from 'react';

// import { Container } from './styles';

export default class Repository extends Component {
  state = {
    repoName: '',
  };

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    this.setState({ repoName });
  }

  render() {
    const { repoName } = this.state;
    return <h1>Repository: {repoName}</h1>;
  }
}
