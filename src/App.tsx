
import { AppBar, Badge, Container, Button, CssBaseline, Grid, TextField, Toolbar, Typography, useTheme, colors } from '@mui/material'
import { PlusCircle } from '@phosphor-icons/react'
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


        <Container sx={{ position: 'relative' }}>


          <Grid container spacing={theme.spacing(0.5)} sx={{ position: 'absolute', top: '-30px' }}>


            <Grid item xl={10} sm={12} >
              <TextField variant="outlined" name="task" fullWidth sx={{backgroundColor: colors.grey[800]}}/>
            </Grid>


            <Grid item xl={2} sm={12}>
              <Button variant="contained" fullWidth sx={{ height: "100%" }}> <span>Criar</span> </Button>
            </Grid>

            <Grid cointainer spacing={theme.spacing(1)} >
              <Grid item>
                  <Typography variant="caption" sx={{display:'flex', alignItems: 'center', gap:theme.spacing(1)}}>
                    <span>Tarefas Criadas</span><Badge color='primary' badgeContent={0} showZero></Badge>
                  </Typography>
              </Grid>
            </Grid>
          </Grid>


        </Container>


      </main>

    </>
  )
}

export default App
