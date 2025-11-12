import React from 'react';
import IconsetDetailPage from '../../../apps/icons-explorer/IconsetDetailPage';
import * as IconsetInfo from '@svgr-iconkit/bootstrap';

export default function DetailPage() {
  return <IconsetDetailPage packageName="bootstrap" iconsetModule={IconsetInfo} />;
}