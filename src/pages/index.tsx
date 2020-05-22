import React, { Fragment } from 'react'
import { NextPage } from 'next'

import { WithReduxNextPageContext } from '../interfaces'
import Counter from '../components/counter'

const Index: NextPage = () => {
  return (
    <Fragment>
      <Counter />
    </Fragment>
  )
}

Index.getInitialProps = async ({
  store,
  req
}: WithReduxNextPageContext): Promise<{ isServer: boolean }> => {
  const isServer = !!req

  return { isServer }
}

export default Index
