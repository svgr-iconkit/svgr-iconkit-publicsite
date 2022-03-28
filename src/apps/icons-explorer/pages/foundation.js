import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/foundation'

export default function DetailPage() {
  return <IconsetDetailPage packageName="foundation" iconsetModule={IconsetInfo} />
}