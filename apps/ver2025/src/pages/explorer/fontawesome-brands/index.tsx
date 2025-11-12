import React from 'react';
import IconsetDetailPage from '../../../apps/icons-explorer/IconsetDetailPage';
import * as IconsetInfo from '@svgr-iconkit/fontawesome-brands';

export default function DetailPage() {
  return <IconsetDetailPage packageName="fontawesome-brands" iconsetModule={IconsetInfo} />;
}