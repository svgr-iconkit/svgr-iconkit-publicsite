import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/grommet-icons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="grommet-icons" iconsetModule={IconsetInfo} />
}