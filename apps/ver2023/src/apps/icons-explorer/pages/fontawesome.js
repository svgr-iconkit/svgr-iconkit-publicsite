import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/fontawesome'

export default function DetailPage() {
  return <IconsetDetailPage packageName="fontawesome" iconsetModule={IconsetInfo} />
}