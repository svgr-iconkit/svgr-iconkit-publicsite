import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/simple-icons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="simple-icons" iconsetModule={IconsetInfo} />
}