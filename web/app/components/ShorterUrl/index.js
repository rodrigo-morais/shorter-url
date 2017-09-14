/* eslint no-param-reassign: ["error", { "props": false }] */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/shared/H1';
import Table from 'components/shared/Table';
import Thead from 'components/shared/Thead';
import Th from 'components/shared/Th';
import Tbody from 'components/shared/Tbody';
import Tr from 'components/shared/Tr';
import Td from 'components/shared/Td';
import Form from 'components/shared/Form';
import InputText from 'components/shared/InputText';
import Fieldset from 'components/shared/Fieldset';
import Button from 'components/shared/Button';

import messages from './messages';

const ShorterUrl = ({ urls, convertUrl }) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const url = form.querySelector('input');

    convertUrl(url.value);

    url.value = '';
  };

  return (
    <div>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Form onSubmit={onSubmit}>
        <Fieldset>
          <InputText type="text" />
          <Button type="submit">
            <FormattedMessage {...messages.form.submit} />
          </Button>
        </Fieldset>
      </Form>
      <hr />
      <Table>
        <Thead>
          <Tr>
            <Th>URL</Th>
            <Th>Short URL</Th>
          </Tr>
        </Thead>
        <Tbody>
          { urls.map((url, index) =>
            <Tr key={index}>
              <Td>
                {url.complete}
              </Td>
              <Td>
                { url.short }
              </Td>
            </Tr>
          ) }
        </Tbody>
      </Table>
    </div>
  );
};

ShorterUrl.propTypes = {
  urls: PropTypes.array,
  convertUrl: PropTypes.func.isRequired,
};

export default ShorterUrl;
