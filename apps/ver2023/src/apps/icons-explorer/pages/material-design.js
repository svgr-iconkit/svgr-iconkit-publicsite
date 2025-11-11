import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/material-design'

export default function DetailPage() {
  return <IconsetDetailPage packageName="material-design" iconsetModule={IconsetInfo} />
}