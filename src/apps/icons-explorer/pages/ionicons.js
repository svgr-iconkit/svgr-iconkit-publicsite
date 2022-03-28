import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/ionicons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="ionicons" iconsetModule={IconsetInfo} />
}