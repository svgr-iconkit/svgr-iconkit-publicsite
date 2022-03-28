import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/feather'

export default function DetailPage() {
  return <IconsetDetailPage packageName="feather" iconsetModule={IconsetInfo} />
}