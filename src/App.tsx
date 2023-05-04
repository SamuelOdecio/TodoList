
import { AppBar, Button, CssBaseline, Grid, TextField, Toolbar, Typography, useTheme } from '@mui/material'
import './App.css'

function App() {

  const theme = useTheme();

  return (
    <>

      <CssBaseline/>
      <AppBar position="static">
        <Toolbar sx={{
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          '@media all': {
            minHeight: 200,
          }
        }}>
          <Typography variant='h5' component='h1'>TODO</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Grid container spacing={theme.spacing(0.5)}>
          <Grid item xl={10} sm={12}>
            <TextField name="task" fullWidth />
          </Grid>
          <Grid item xl={2} sm={12}>
            <Button variant="contained" fullWidth sx={{"height":"100%"}}>Criar</Button>
          </Grid>
        </Grid>
      </main>

    </>
  )
}

export default App
