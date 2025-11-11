import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/primeicons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="primeicons" iconsetModule={IconsetInfo} />
}