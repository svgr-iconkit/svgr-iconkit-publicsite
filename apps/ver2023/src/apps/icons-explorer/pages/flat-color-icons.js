import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/flat-color-icons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="flat-color-icons" iconsetModule={IconsetInfo} />
}