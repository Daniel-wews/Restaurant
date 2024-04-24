import { Typography, Box } from '@mui/material';
import Layout from '../components/layout/Layout';

export default function About() {
    return (
        <Layout>
            <Box sx={{
                my: 15,
                textAlign: 'center',
                "& h4": {
                    fontWeight: 'bold',
                    my: 2,
                    fontSize: '2rem',
                },
                "& p": {
                    textAlign: 'justify'
                },
                "@media (max-width:600px)": {
                    mt: 0,
                    "& h4": {
                        fontSize: '1rem'
                    }
                }
            }}>
                <Typography variant='h4'>Welcome to My Restaurant</Typography>
                <Typography sx={{ mb: '20px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, temporibus culpa sapiente autem eligendi corporis. Amet possimus, illum dolor beatae consequatur voluptatibus? Quia quidem nesciunt nulla asperiores! Vero id facere, porro doloremque reprehenderit nesciunt ea nostrum dolor asperiores earum sapiente iure, quia quaerat. Dolore doloremque fugiat animi non ullam harum at consequatur corrupti quo pariatur id aliquid quis aliquam asperiores tenetur incidunt unde, eius obcaecati debitis in, voluptas maiores. Ratione dignissimos sequi, aliquid beatae iure, blanditiis pariatur suscipit autem quia, quibusdam nulla quasi placeat doloremque facilis. Enim deserunt aspernatur libero, molestias esse distinctio sed. Expedita alias eligendi est cum sint.</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur ea, dolorum sapiente veniam voluptatum exercitationem labore sunt minima sequi, aperiam officia neque maxime adipisci iure? Non distinctio sapiente asperiores! Deserunt vel reiciendis autem minima amet, aperiam quisquam natus provident eius, aliquam odio perspiciatis tenetur iusto id laboriosam accusamus quos et, at commodi saepe beatae distinctio. A quaerat at aliquid hic! Delectus debitis cumque quam, aliquid voluptatem ad, similique sit ullam repudiandae, mollitia perspiciatis! Quia aliquid labore voluptas dolor error placeat ducimus explicabo ut nam atque id beatae, molestias, molestiae accusantium unde ratione facere soluta sapiente repudiandae. Odio, non beatae.</Typography>
            </Box>
        </Layout>
    );
}
