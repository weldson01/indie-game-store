"use client"
import { Atom, Gear, House, Newspaper, SquaresFour, Users } from "@phosphor-icons/react";
import Link from "next/link";
import { useContext, useState } from "react";
import { RecentActivityContext } from "@/context/RecentActivity";
import Image from "next/image";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";


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
        <Drawer open={showMenu} title="Indie Game Store" >
            <List>
                <ListItemButton onClick={handleToggleMenu}>
                    <Close />
                </ListItemButton>

                <Link href="/home">
                    <ListItem>
                        <ListItemIcon>
                            <House size={32} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="h4">
                                Home
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link href="#">
                    <ListItem>
                        <ListItemIcon>
                            <SquaresFour size={32} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="h4">
                                Dashboard
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link href="#">
                    <ListItem>
                        <ListItemIcon>
                            <Users size={32} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="h4">
                                Groups
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link href="#">
                    <ListItem>
                        <ListItemIcon>
                            <Gear size={32} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="h4">
                                Settings
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
            <Box>
                {
                    game &&
                    <Stack alignItems="center">
                        <Typography variant="h4">
                            Recent Activity
                        </Typography>
                        <Typography variant="h5" py={2}>
                            {game.title}
                        </Typography>
                        <Image width={320} height={250} src={game?.src} alt={game?.title}/>
                    </Stack>
                }
            </Box>
        </Drawer>
    </aside>
}