import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/octicons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="octicons" iconsetModule={IconsetInfo} />
}