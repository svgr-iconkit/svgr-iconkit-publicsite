import React from 'react';
import IconsetDetailPage from '../../../apps/icons-explorer/IconsetDetailPage';
import * as IconsetInfo from '@svgr-iconkit/octicons';

export default function DetailPage() {
  return <IconsetDetailPage packageName="octicons" iconsetModule={IconsetInfo} />;
}