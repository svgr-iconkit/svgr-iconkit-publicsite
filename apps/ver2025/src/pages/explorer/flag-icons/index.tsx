import React from 'react';
import IconsetDetailPage from '../../../apps/icons-explorer/IconsetDetailPage';
import * as IconsetInfo from '@svgr-iconkit/flag-icons';

export default function DetailPage() {
  return <IconsetDetailPage packageName="flag-icons" iconsetModule={IconsetInfo} />;
}