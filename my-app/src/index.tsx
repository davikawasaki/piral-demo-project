import * as React from 'react';
import { renderInstance, requestPiletsFromGraphQL, setupGqlClient } from 'piral';
import { layout, errors } from './layout';

const gql = setupGqlClient();

renderInstance({
  settings: {
    gql,
  },
  layout,
  errors,
  requestPilets() {
    return requestPiletsFromGraphQL(gql);
  },
});

export * from 'piral';
