import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/evil-icons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="evil-icons" iconsetModule={IconsetInfo} />
}