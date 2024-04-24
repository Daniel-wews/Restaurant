import { Button, Stack, Typography } from '@mui/material';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpeg'
export default function Home() {
    return (
        <Layout>
            <Stack sx={{
                backgroundImage: `url(${Banner})`,
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
                minHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                '@media (max-width:600px)': {
                    justifyContent: 'center',
                    alignItems: 'center'
                },
            }}>
                <Stack sx={{
                    width: 'auto', marginLeft: '30px',
                    '@media (max-width:600px)': {
                        marginLeft: 0,
                        borderRadius: '10px',
                        width: '90%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor: '#121619',
                        color: 'white',
                    },
                }}>
                    <Typography variant='h1'
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            fontFamily: "Gill Sans, 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                            color: "black",
                            '@media (max-width:600px)': {
                                fontSize: '40px',
                                height: '30px',
                                margin: '30px 0',
                                color: "white"
                            },
                        }}>
                        Food Website
                    </Typography>
                    <Typography variant='p' sx={{
                        marginTop: '15px', p: '0', fontSize: "40px", fontWeight: 'lighter', color: 'black',
                        '@media (max-width:600px)': {
                            fontSize:"30px",
                            color: "white"
                        },
                    }}>

                        Best Food in California</Typography>

                    <Button component={Link} to={'/menu'}
                        sx={{
                            width: '10%',
                            backgroundColor: '#121619',
                            mt: '20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            height: '50px',
                            width: '180px',
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: '20px',
                            '&:hover': {
                                backgroundColor: '#07090a',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease-in',
                                transition: 'color 0.3s ease-in',
                                color:'#ffb'
                            },
                            '@media (max-width:600px)': {
                                backgroundColor:'white',
                                color:'#121619',
                                mb:'30px'
                            },
                        }}>
                        ORDER NOW</Button>

                </Stack>
            </Stack>
        </Layout >
    )
}