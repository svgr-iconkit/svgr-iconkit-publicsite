import React from 'react'
import IconsetDetailPage from '../IconsetDetailPage'
import * as IconsetInfo from '@svgr-iconkit/weather-icons'

export default function DetailPage() {
  return <IconsetDetailPage packageName="weather-icons" iconsetModule={IconsetInfo} />
}