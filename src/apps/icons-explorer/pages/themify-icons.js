import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/themify-icons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="themify-icons" iconsetModule={IconsetInfo} />
}