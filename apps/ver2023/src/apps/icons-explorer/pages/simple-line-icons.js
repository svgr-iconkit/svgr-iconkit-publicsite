import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/simple-line-icons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="simple-line-icons" iconsetModule={IconsetInfo} />
}