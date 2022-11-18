/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import DefaultHeader from "@components/molecules/DefaultHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/future/image";
import DefaultFooter from "@components/molecules/DefaultFooter";
import { Page, Text, Box, Carousel } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type HomePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function HomePage(props: HomePageProps): JSX.Element {
  return (
    <Page className={styles.page_container}>
      <DefaultHeader className={styles.defaultheader_1} />
      <Text className={styles.text_1} textType={"Text"}>
        Welcome to Project One
      </Text>
      <Box className={styles.box_0}>
        <Box className={styles.box_2}>
          <Carousel>
            <Box className={styles.box_3}>
              <Image
                src={`https://picsum.photos/600/600`}
                width={"340"}
                height={"300"}
                alt={""}
                className={styles.image_1}
              />
            </Box>
            <Box className={styles.box_4}>
              <Image
                src={`https://picsum.photos/600/600`}
                width={"340"}
                height={"300"}
                alt={""}
                className={styles.image_2}
              />
            </Box>
            <Box className={styles.box_5}>
              <Image
                src={`https://picsum.photos/600/600`}
                width={"340"}
                height={"300"}
                alt={""}
                className={styles.image_3}
              />
            </Box>
            <Box className={styles.box_6}>
              <Image
                src={`https://picsum.photos/600/600`}
                width={"340"}
                height={"300"}
                alt={""}
                className={styles.image_4}
              />
            </Box>
          </Carousel>
        </Box>
      </Box>
      <DefaultFooter className={styles.defaultfooter_1} />
    </Page>
  );
}
export default HomePage;
