import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/typicons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="typicons" iconsetModule={IconsetInfo} />
}