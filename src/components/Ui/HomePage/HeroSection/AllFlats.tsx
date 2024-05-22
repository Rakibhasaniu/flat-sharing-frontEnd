import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container,Box, Stack } from '@mui/material';
import Image from 'next/image';


const AllFlats =async () => {
    const res = await fetch("http://localhost:5000/api/flats");
    const {data:flats} = await res.json();
    console.log(flats)
    return (
        <Container>
             <Box
               sx={{
                  textAlign: 'start',
               }}
            >
               <Typography variant='h4' fontWeight={600}>
                  Explore Treatments Across Specialties
               </Typography>
               <Typography component='p' fontWeight={300} fontSize={18} mt={1}>
                  Experienced Doctors Across All Specialties
               </Typography>
            </Box>
             <Stack direction='row' gap={4} mt={5}>
                {flats.slice(0,3).map ((flat:any) =>(
                     <Box
                     key={flat.id}
                     sx={{
                        flex: 1,
                        // justifyContent:'space-between',
                        width: '300px',
                        height:'400px',
                    
                        // backgroundColor: 'rgba(245, 245, 245,1)',
                        border: '1px solid rgba(250, 250, 250, 1)',
                        borderRadius: '10px',
                        textAlign: 'center',
                        padding: '40px 10px',
                        '& img': {
                           width: '50px',
                           height: '50px',
                           margin: '0 auto',
                        },
                        '&:hover': {
                           border: '1px solid rgba(36, 153, 239, 1)',
                           borderRadius: '10px',
                           cursor: 'pointer',
                           transition: 'all 0.5s',
                        },
                     }}
                    //  component={Link}
                    //  href={`/doctors?specialties=${specialty.title}`}
                  >
                     {/* <Image
                        src={specialty.icon}
                        width={100}
                        height={100}
                        alt='specialty icon'
                     /> */}
                     <Box>
                        <Typography
                           component='p'
                           fontWeight={600}
                           fontSize={18}
                           mt={2}
                        >
                           {flat.location}
                        </Typography>
                        <Typography
                           component='p'
                           fontWeight={600}
                           fontSize={18}
                           mt={2}
                        >
                           {flat.rent}
                        </Typography>
                        <Typography
                           component='p'
                           fontWeight={600}
                           fontSize={18}
                           mt={2}
                        >
                           {flat.totalBedrooms}
                        </Typography>
                        <Typography
                           component='p'
                           fontWeight={600}
                           fontSize={18}
                           mt={2}
                        >
                           {flat.description}
                        </Typography>
                        <Button>Details</Button>
                     </Box>
                  </Box>
                ))}
             </Stack>
             
        </Container>
    );
};

export default AllFlats;