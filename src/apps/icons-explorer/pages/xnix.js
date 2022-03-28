import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/xnix'

export default function DetailPage() {
  return <IconsetDetailPage packageName="xnix" iconsetModule={IconsetInfo} />
}