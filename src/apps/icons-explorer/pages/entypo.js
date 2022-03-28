import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/entypo'

export default function DetailPage() {
  return <IconsetDetailPage packageName="entypo" iconsetModule={IconsetInfo} />
}