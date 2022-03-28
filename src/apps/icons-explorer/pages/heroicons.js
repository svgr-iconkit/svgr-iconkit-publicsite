import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/heroicons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="heroicons" iconsetModule={IconsetInfo} />
}