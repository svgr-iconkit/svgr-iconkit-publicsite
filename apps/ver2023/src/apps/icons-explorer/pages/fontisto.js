import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/fontisto'

export default function DetailPage() {
  return <IconsetDetailPage packageName="fontisto" iconsetModule={IconsetInfo} />
}