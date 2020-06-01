import React from "react";
import { connect, css } from "frontity";
import useInfiniteScroll from "@frontity/hooks/use-infinite-scroll";
import UseInfiniteScroll from "../types";

const Page: React.FC<{ currentLink: string; nextLink?: string }> = connect(
  ({ currentLink, nextLink }) => {
    const { supported, routeRef, fetchRef } = useInfiniteScroll({
      currentLink,
      nextLink,
    });

    const wrapper = css`
      position: relative;
    `;

    const fetcher = css`
      position: absolute;
      width: 100%;
      bottom: 0;
    `;

    const content = css`
      min-height: 100vh;
    `;

    const Content = (
      <div data-id={`content${currentLink.replace("/", "-")}`} css={content}>
        {currentLink}
      </div>
    );

    if (!supported) return Content;

    return (
      <div css={wrapper} ref={routeRef}>
        {Content}
        <div css={fetcher} ref={fetchRef} />
      </div>
    );
  }
);

const Root: React.FC = () => {
  return (
    <div>
      {/* <Page currentLink="/post-1" nextLink="/post-2" /> */}
      {/* <Page currentLink="/post-2" nextLink="/post-3" />
      <Page currentLink="/post-3" /> */}
    </div>
  );
};

const pkg: UseInfiniteScroll = {
  name: "use-infinite-scroll",
  state: {},
  actions: {},
  roots: {
    useInfiniteScroll: Root,
  },
  libraries: {},
};

export default pkg;
