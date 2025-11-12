import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import { Icon } from "@svgr-iconkit/core";
import ColorizerIconContent from "@svgr-iconkit/fluentui-system/icons/regular/color";
import LineStylesIcon from "@svgr-iconkit/fluentui-system/icons/regular/line-style";
import { ReactNode, useState, useRef, useEffect } from "react";
import { pathPrefix, sortedPackageNames } from "../config";
import { ToggleAsideButton } from "./ToggleAsideButton";
import clsx from "clsx";

export default function Frame({
  children,
  packageName: currentPackageName,
}: {
  children: ReactNode;
  packageName: string;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const activeLinkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use setTimeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      if (activeLinkRef.current) {
        activeLinkRef.current.scrollIntoView({
          behavior: "auto",
          block: "nearest",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentPackageName]);

  return (
    <div className="flex flex-row max-w-screen">
      <aside>
        {/* Overlay for mobile */}
        <div
          className={`fixed w-screen h-screen z-[-1] bg-black/80 left-[-200vw] top-0 transition-opacity duration-250 ease-out lg:hidden ${showMenu ? "left-0 z-[8] opacity-100" : ""
            }`}
          onClick={() => {
            setShowMenu(false);
          }}
        />

        {/* Side menu */}
        <BrowserOnly fallback={<div />}>
          {() => (<>
            <nav
              data-show-menu={showMenu}
              className={clsx({
                "w-[280px] fixed top-0 left-[100vw] border-l border-gray-200 lg:border-l-0 lg:border-r lg:left-0 pt-0 h-screen z-[10] transition-transform duration-250 ease-out lg:bg-transparent lg:w-[var(--doc-sidebar-width)] lg:sticky lg:h-full lg:z-0 lg:transition-none lg:max-h-screen lg:translate-x-0": true,
                "translate-x-[-280px]": showMenu,
              })}
            >
              <div className="bg-[var(--ifm-navbar-background-color)] overflow-auto pb-[env(safe-area-inset-bottom)] h-full lg:border-r lg:border-[var(--ifm-toc-border-color)]">
                <div className="pt-3 px-3">
                  <h3 className="text-lg font-semibold">Icons Explorer</h3>
                </div>
                <div className="p-2 flex flex-col">
                  {sortedPackageNames.map(
                    ({ packageName, name, meta: { colorize, hasStrokeStyle } }) => {
                      const isActive = currentPackageName === packageName;
                      return (
                        <div
                          key={packageName}
                          ref={isActive ? activeLinkRef : null}
                        >
                          <Link
                            to={`${pathPrefix}${packageName}`}
                            className={`flex pointer items-center justify-between px-2 py-2 lg:py-0.5 rounded-md my-0.5 no-underline cursor-pointer ${isActive
                              ? "text-white bg-[var(--ifm-color-primary)] hover:text-white hover:no-underline"
                              : "text-[var(--ifm-color-primary)] hover:underline"
                              }`}
                          >
                            <span>{name}</span>
                            <span className="flex items-center justify-center">
                              {colorize && (
                                <Icon size={18} content={ColorizerIconContent} />
                              )}
                              {hasStrokeStyle && (
                                <Icon size={18} content={LineStylesIcon} />
                              )}
                            </span>
                          </Link>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </nav>
            <ToggleAsideButton active={showMenu} onChange={() => setShowMenu(true)} />
          </>
          )}
        </BrowserOnly>
      </aside>
      <main className="min-h-[80vh] flex-1 p-3">{children}</main>
    </div>
  );
}


