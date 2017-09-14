/* eslint no-param-reassign: ["error", { "props": false }] */

import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import messages from './messages'

import H1 from 'components/shared/H1'
import Table from 'components/shared/Table'
import Thead from 'components/shared/Thead'
import Th from 'components/shared/Th'
import Tbody from 'components/shared/Tbody'
import Tr from 'components/shared/Tr'
import Td from 'components/shared/Td'

const ShorterUrl = ({ urls, loading, error }) => {
  return (
    <div>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
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
  )
}

ShorterUrl.propTypes = {
  urls: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
}

export default ShorterUrl
