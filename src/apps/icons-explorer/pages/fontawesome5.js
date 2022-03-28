import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/fontawesome5'

export default function DetailPage() {
  return <IconsetDetailPage packageName="fontawesome5" iconsetModule={IconsetInfo} />
}