import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/tabler-icons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="tabler-icons" iconsetModule={IconsetInfo} />
}