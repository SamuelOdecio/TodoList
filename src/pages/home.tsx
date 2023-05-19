import { AppBar, Box, Chip, Container, Button, CssBaseline, Grid, TextField, Toolbar, Typography, useTheme, colors } from '@mui/material'
import { useState } from 'react';
import { CardTarefa } from '../CardTarefa/index';

export function Home() {
    const [novaTarefa, setNovaTarefa] = useState('');
    const [tarefas, setTarefas] = useState<string[]>([]);
  
    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNovaTarefa(event.target.value);
    };
  
    const handleCreate = () => {
      setTarefas([...tarefas, novaTarefa]);
    };

    const theme = useTheme();

    return (
        <>
            <CssBaseline />
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
                            <TextField variant="outlined" name="task" fullWidth sx={{ backgroundColor: colors.grey[800] }} />
                        </Grid>


                        <Grid item xl={2} sm={12}>
                            <Button variant="contained" fullWidth sx={{ height: "100%" }}> <span>Criar</span> </Button>
                        </Grid>


                        <Grid spacing={theme.spacing(2)}>

                            <Grid item xl={12} sx={{ display: "flex", alingItens: "center", gap: theme.spacing(1) }}>
                                
                                <Box display="flex" alignItems="center" gap={theme.spacing(1)} >
                                    <Typography variant="caption" sx={{ gap: theme.spacing(1) }}> Tarefas Criadas </Typography>
                                    <Chip label={0} />
                                </Box>

                                <Box display="flex" alignItems="center" gap={theme.spacing(1)} >
                                    <Typography variant="caption" sx={{ gap: theme.spacing(1) }}> Concluidas </Typography>
                                    <Chip label={0} />
                                </Box>
                                
                            </Grid>

                        </Grid>
                        
                        <CardTarefa></CardTarefa>
                        

                    </Grid>


                </Container>


            </main>
        </>
        )};