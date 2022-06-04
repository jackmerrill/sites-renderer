import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { useEffect, useState } from "react";
import { GetAllPages, GetPage } from "../test_data";
import { Page } from "../types/website";
import React from "react";

export async function getStaticProps(context: GetStaticPropsContext) {
  if (!context.params || !context.params.page) {
    throw new Error("No params");
  }
  const page = GetPage(`/${context.params.page[0]}`);

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  const pages = GetAllPages();

  const paths = pages.map((page) => page.path);

  return {
    paths,
    fallback: false,
  };
}

export default function TemplatePage({ page }: { page: Page }) {
  const [Components, setComponents] = useState<any[]>([]);

  useEffect(() => {
    page.children.forEach(async (child, i) => {
      const path = `http://127.0.0.1:4567/${child.component}.js`;
      const Component = await import(path).then((m) => m.default);

      console.log(Component);

      setComponents((prev) => [...prev, Component]);
    });
  }, []);

  return (
    <div>
      {Components.map((Component, index) => {
        console.log(Component);
        return <Component key={index} />;
      })}
    </div>
  );
}
