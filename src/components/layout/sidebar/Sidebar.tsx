"use client"
import { Atom, Gear, House, SquaresFour, Users } from "@phosphor-icons/react";
import Link from "next/link";
import { useContext, useState } from "react";
import { RecentActivityContext } from "@/context/RecentActivity";
import Image from "next/image";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";

const iconMenu = [<House size={32} color="#fff" key="houseIcon" />, <SquaresFour size={32} color="#fff" key="squaresIcon" />, <Users size={32} color="#fff" key="usersIcon" />, <Gear size={32} color="#fff" key="gearIcon" />]

export default function Sidebar() {
    // @ts-ignore
    const { game } = useContext(RecentActivityContext)
    const [showMenu, setShowMenu] = useState(false)

    const handleToggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return <aside>
        <Button className="min-h-full rounded-full" onClick={handleToggleMenu}>
            <Menu />
        </Button>
        <Drawer open={showMenu} title="Indie Game Store" onClose={handleToggleMenu}>
            <Box className="bg-primary text-whiteColor min-h-full">
                <List title="ok">
                    <ListItemButton onClick={handleToggleMenu}>
                        <Close />
                    </ListItemButton>
                    {["home", "dashboard", "groups", "settings"].map((text, index) => {
                        return (<Link href="/home" key={text}>
                            <ListItem >
                                <ListItemIcon>
                                    {iconMenu[index]}
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant="h5">
                                        {text}
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </Link>)
                    })
                    }
                </List>
                <Box>
                    {
                        game.title &&
                        <Stack alignItems="center">
                            <Typography variant="h5">
                                Recent Activity
                            </Typography>
                            <Typography variant="h6" py={2}>
                                {game.title}
                            </Typography>
                            <Image width={320} height={250} src={game?.src} alt={game?.title} />
                        </Stack>
                    }
                </Box>
            </Box>
        </Drawer>
    </aside>
}