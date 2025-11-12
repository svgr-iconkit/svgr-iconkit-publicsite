import React from "react";
import { Icon } from "@svgr-iconkit/core";
import LinkIconContent from "@svgr-iconkit/heroicons/icons/outline/link";
import { iconsetWithScope } from "../utils";
import { IconsetInfo } from "../types";

interface IconsetPanelProps {
  iconsetInfo: IconsetInfo;
  iconSize?: number;
  iconColor?: string;
}

export default function IconsetPanel({
  iconsetInfo,
}: IconsetPanelProps) {
  const {
    name: familyName,
    packageName,
    originalAuthor,
    license,
    coreVersion = "0.1.20",
    iconNames = [],
  } = iconsetInfo || {};

  if (!packageName) {
    return null;
  }

  const packageNameWithScope = iconsetWithScope(packageName);
  return (
    <div className="m-2">
      <div>
        <h2 className="text-2xl font-bold mb-2">{familyName}</h2>
        <div className="my-1 flex items-center">
          <a
            data-testid="package-npm-link"
            href={`https://npmjs.com/package/${packageNameWithScope}`}
            title="Open in npmjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://img.shields.io/npm/v/${packageNameWithScope}?label=${packageNameWithScope}&style=flat-square`}
              alt={`Latest version of ${packageNameWithScope}`}
            />
            {` `}
            <img
              src={`https://img.shields.io/npm/dm/${packageNameWithScope}?logo=npm&label=&style=flat-square`}
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {!!originalAuthor && (
          <div className="md:col-span-1 lg:col-span-2">
            <div className="flex flex-col justify-center">
              <label className="block font-bold text-xs mt-1 mb-1">Creator</label>
              <div>
                <a
                  href={originalAuthor.url}
                  data-testid="creator-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[var(--ifm-color-primary)] hover:underline"
                >
                  <span className="mr-1">{originalAuthor.name}</span>
                  <Icon content={LinkIconContent} size={12} />
                </a>
              </div>
              {!!originalAuthor.package && (
                <div>
                  <a
                    data-testid="package-author-npm-link"
                    href={`https://npmjs.com/package/${originalAuthor.package}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-1 text-xs text-[var(--ifm-color-primary)] hover:underline"
                  >
                    {originalAuthor.package}
                  </a>
                  <span className="text-xs px-1.5 py-0.5 text-white bg-gray-500 dark:bg-gray-700 rounded">
                    {originalAuthor.version}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="md:col-span-1 lg:col-span-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-bold text-xs mt-1 mb-1">License</label>
              <p>{license}</p>
            </div>
            <div>
              <label className="block font-bold text-xs mt-1 mb-1">
                Required core version
              </label>
              <span className="text-xs px-1.5 py-0.5 bg-gray-500 dark:bg-gray-700 text-white  rounded">
                {coreVersion}
              </span>
            </div>
            <div>
              <label className="block font-bold text-xs mt-1 mb-1">Total icons</label>
              <p>{iconNames.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


