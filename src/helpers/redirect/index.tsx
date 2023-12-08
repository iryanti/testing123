import { NextPageContext } from "next";
import Router from "next/router";

export type IWindowTarget = "_blank";

/**
 * Handle redirect on both server-side and client-side
 *
 * @param res response object from NextPageContext
 * @param target
 * @param referrer
 */
const redirect = (
  target: string,
  referrer?: string,
  ctx?: NextPageContext
): void => {
  const urlDest = referrer ? `${target}?ref=${referrer}` : target;
  if (ctx?.res) {
    ctx.res.writeHead(302, {
      Location: urlDest,
    });
    ctx.res.end();
  } else {
    Router.push(urlDest);
  }
};
/**
 * Open the given URL into a new target
 *
 * @param  {string} url
 * @param  {IWindowTarget} [target='_blank']
 * @returns void
 */

const openInNewTab = (url: string, target: IWindowTarget = "_blank"): void => {
  window.open(url, target);
};
export { redirect, openInNewTab };
