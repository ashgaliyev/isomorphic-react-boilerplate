import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import AboutPage from './AboutPage'
import GreetingMessage from './GreetingMessage'

describe('component: AboutPage', () => {
  it('should render GreetingMessage', () => {
    const wrapper = shallow(<AboutPage />)
    expect(wrapper.containsAllMatchingElements([
      <GreetingMessage />
    ])).to.equal(true)
  })
})
