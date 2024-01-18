import React, { useCallback, useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

import {
  Box,
  Collapse,
  Fade,
  Icon,
  Text,
  Link as LinkChakra,
} from "@chakra-ui/react";

import { useDrawer } from "@/hooks/useDrawer";
import DrawerMenu from "./drawerMenu";
import { useRouter } from "next/router";
import { DrawerSubMenuProps, SubMenuList } from "@/types";

const DrawerSubMenu: React.FC<DrawerSubMenuProps> = ({
  title,
  icon,
  list,
  groupSubMenuOpen,
  setGroupSubMenuOpen,
}) => {
  const { isOpen } = useDrawer();
  const [subMenu, setSubMenu] = useState(false);
  const router = useRouter();

  const isActive = list.find(function (el: SubMenuList) {
    return el.route === router.asPath;
  });

  const handleToggleCollapse = useCallback(() => {
    setGroupSubMenuOpen(title);
    setSubMenu((state) => !state);
  }, [setGroupSubMenuOpen, title]);

  useEffect(() => {
    if (groupSubMenuOpen !== title) {
      setSubMenu(false);
    }
  }, [groupSubMenuOpen, title]);

  return (
    <>
      <LinkChakra
        w="100%"
        py="2"
        px="6"
        display="flex"
        alignItems="center"
        color={isActive ? "white" : "gray.200"}
        background={isActive ? "gray.900" : isActive ? "cc.red" : ""}
        transition=".3s"
        _hover={{
          ...(!isActive ? { background: "gray.900" } : null),
          color: "white",
        }}
        onClick={handleToggleCollapse}
      >
        <Icon as={icon} fontSize="lg" my="3px" />

        <Box flex="1">
          <Fade in={isOpen} unmountOnExit={true}>
            <Text
              as="span"
              ml="2"
              fontSize="sm"
              fontWeight="300"
              whiteSpace="nowrap"
            >
              {title}
            </Text>
          </Fade>
        </Box>

        <Fade in={isOpen} unmountOnExit={true}>
          {subMenu ? (
            <Icon as={FiChevronUp} fontSize="sm" mt="2" />
          ) : (
            <Icon as={FiChevronDown} fontSize="sm" mt="2" />
          )}
        </Fade>
      </LinkChakra>

      {isOpen && (
        <Collapse in={Boolean(isActive) || subMenu} animateOpacity>
          {list.map(function (el: any) {
            return (
              <DrawerMenu
                key={`sub-${el.title}`}
                title={el.title}
                route={el.route}
                icon={BsDot}
                matchExactHref={true}
                isSubMenu={true}
              />
            );
          })}
        </Collapse>
      )}
    </>
  );
};
export default DrawerSubMenu;
