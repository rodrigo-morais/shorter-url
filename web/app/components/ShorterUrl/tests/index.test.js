import React from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import ShorterUrl from '../index'
import messages from '../messages'


describe('<ShorterUrl />', () => {
  const shorterUrlMock = jest.fn()
  const urls = [
    { complete: 'http://www.google.com',
      short: 'http:/goo.gl'
    }
  ]

  it('renders according to design', () => {
    const component = renderer.create(
      <IntlProvider locale="en">
        <ShorterUrl
          urls={urls}
          loading={false}
          error={false}
        />
      </IntlProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the page title', () => {
    const renderedComponent = shallow(
      <ShorterUrl
        urls={urls}
        loading={false}
        error={false}
      />
    )
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true)
  })
})
