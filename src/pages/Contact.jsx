import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Layout from '../components/layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export default function Contact(){
    return(
        <Layout>
        <Box sx={{my:10, ml:10, "& h4": {fontWeight:'bold', mb:2 } }}>
            <Typography variant='h4'>Contact My Restaurant</Typography>
            <Typography variant='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, dolore accusantium nesciunt corporis maxime sint tenetur sed labore odit dolorum ullam quaerat distinctio enim nostrum, sit dignissimos. Quidem velit voluptatum iure natus explicabo doloremque, iusto veniam illum deleniti. Quidem, impedit eos! Adipisci, reiciendis consequuntur! Hic, obcaecati. Magnam assumenda similique sint?</Typography>
        </Box>
        <Box sx={{m:3, width:"600px", ml:"10", "@media (max-width:600px)":{
            width:'300px'
        } }}>
            <TableContainer component={Paper}>
                <Table aria-label='contanct table'>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{bgcolor:'black', color:'white'}} align='center'>Contact Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <SupportAgentIcon sx={{color:'red', pt:1}} />1800-00-0000(torollFree)
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>
                                <EmailIcon sx={{color:'skyblue', pt:1}} />help@myrest.com
                            </TableCell>
                        </TableRow>
                            <TableRow>
                            <TableCell>
                                <CallIcon sx={{color:'green', pt:1}} />1234567890
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        </Layout>
    )
}