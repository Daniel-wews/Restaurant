import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Layout from '../components/layout/Layout';
import { MenuList } from '../data/data';

export default function Menu() {
    return (
        <Layout>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {MenuList.map((menu) => (
                    <Card key={menu.id} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ minHeight: "400px" }}
                                component={"img"}
                                src={menu.image}
                                alt={menu.name}
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom component={"div"}>
                                    {menu.name}
                                </Typography>
                                <Typography variant="body2">{menu.description}</Typography>
                                <Typography variant="body1" sx={{fontWeight:'bold', mt:'10px'}}>R${menu.price}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Layout>
    );
};