import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/fluentui-system'

export default function DetailPage() {
  return <IconsetDetailPage packageName="fluentui-system" iconsetModule={IconsetInfo} />
}