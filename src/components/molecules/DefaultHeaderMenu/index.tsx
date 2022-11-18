/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import { useNavigateService } from "@services/navigate";
import { Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type DefaultHeaderMenuMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
};
function DefaultHeaderMenuMolecule(props: DefaultHeaderMenuMoleculeProps): JSX.Element {
  const navigateService = useNavigateService();

  const handleHeaderMenuMoleculeHome0 = async () => {
    try {
      navigateService.navigate("/");
    } catch (e: unknown) {}
  };
  const handleHeaderMenuMoleculeContactUs0 = async () => {
    try {
      navigateService.navigate("/tasks");
    } catch (e: unknown) {}
  };
  const handleHeaderMenuMoleculeAbout0 = async () => {
    try {
      navigateService.navigate("/login");
    } catch (e: unknown) {}
  };
  return (
    <Box
      className={`${styles.header_menu_molecule_0} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box
        responsiveVisibility={["desktop", "tablet", "mobile"]}
        className={styles.header_menu_molecule_box_0}
      >
        <Text
          className={styles.header_menu_molecule_home_0}
          textType={"Text"}
          onClick={handleHeaderMenuMoleculeHome0}
        >
          Home
        </Text>
        <Text
          className={styles.header_menu_molecule_contact_us_0}
          textType={"Text"}
          onClick={handleHeaderMenuMoleculeContactUs0}
        >
          Tasks
        </Text>
        <Text
          className={styles.header_menu_molecule_about_0}
          textType={"Text"}
          onClick={handleHeaderMenuMoleculeAbout0}
        >
          Log in
        </Text>
      </Box>
    </Box>
  );
}
export default DefaultHeaderMenuMolecule;
