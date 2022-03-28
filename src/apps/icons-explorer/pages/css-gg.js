import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/css-gg'

export default function DetailPage() {
  return <IconsetDetailPage packageName="css-gg" iconsetModule={IconsetInfo} />
}