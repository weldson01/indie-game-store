import ApiGame from "@/services/api/ApiGamesInformations";
import { Gamepad } from "@mui/icons-material";
import { Box, Button, Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import { GridItem } from "./components/indexPage";

export default function Home() {
  const games = ApiGame.getNewstGames()
  return (
    <Container className="bg-secondary min-h-screen text-whiteColor">
      <header className="flex px-5 py-5 justify-between shadow-lg">
        <Typography variant="h5" fontSize={22}>
          Indie Game Store
        </Typography>
        <div className="actions">
          <Button href="/login" variant="text" style={{ color: "white" }}>
            Login
          </Button>
        </div>
      </header>
      <Box component={"section"} className="flex gap-5 flex-col justify-center items-center">
        <Typography variant="subtitle1" fontSize={20} py={2}>
          Play this game now
        </Typography>
        <Image width="1200" height="740" src="/images/cs-go.png" alt="" className="sm:w-2/3" />
        <Typography variant="body1">
          <Button href="/publicgames/0" variant="contained" color="success">
            CS-GO Global
          </Button>
        </Typography>
      </Box>
      <Typography py={2} variant="h5">
        Genre
      </Typography>
      <Grid container gap={2} className="rounded-md py-5">
        {["Action", "Adventure", "Fantasy", "Comedy", "RPG"].map((title, index) => {
          return (
            <Grid item xs="auto" key={index}>
              <Button startIcon={<Gamepad />} variant="contained">
                {title}
              </Button>
            </Grid>
          )
        })
        }
      </Grid>
      <Typography py={2} variant="h5">
        Famous Games
      </Typography>
      <Paper variant="elevation" className="py-5 rounded-2xl">
        <Grid container gap={2}>
          {games ? games.map((game) => {
            return (
              // @ts-ignore
              <GridItem game={game} key={game.title} />
            )
          }) :
            <Grid item xs="auto">
              <Skeleton animation="wave" variant="rectangular" height={120} />
            </Grid>
          }
        </Grid>
      </Paper>
      <footer className="flex flex-col justify-center align-middle h-20">
        <Typography align="center">
          A website by @Weldson
        </Typography>
      </footer>
    </Container>
  );
}
