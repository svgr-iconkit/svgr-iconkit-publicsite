import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/material-community'

export default function DetailPage() {
  return <IconsetDetailPage packageName="material-community" iconsetModule={IconsetInfo} />
}