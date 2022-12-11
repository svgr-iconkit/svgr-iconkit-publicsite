import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/remixicon'

export default function DetailPage() {
  return <IconsetDetailPage packageName="remixicon" iconsetModule={IconsetInfo} />
}