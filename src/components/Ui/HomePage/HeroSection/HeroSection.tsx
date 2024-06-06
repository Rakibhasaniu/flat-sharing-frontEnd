import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import dhakaImage from '@/assets/ban1.png';
import play from '@/assets/play.png';
import Link from 'next/link';

const PopularLocation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 4,
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2,
        margin: 'auto',
        mt: 5
      }}
    >
      <Box sx={{ flex: 1, pr: { md: 3 }, mb: { xs: 3, md: 0 } }}>
        <Typography variant='h4' component="h2" sx={{ fontWeight: 600}} gutterBottom>
        Zero Brokerage
Flatmates Like Friends
        </Typography>
        <Typography variant="body1" paragraph>
        Wrong Flatmates, No More!
        </Typography>
        
        <Box sx={{ display: 'flex',alignItems: 'center' }}>

          <Image
          src={play}
          alt='palyStore'
          width={200}
          height={200}
          /> 
          <Typography sx={{p:4}} variant="body1" paragraph>
        Comming Soon!
        </Typography>
        </Box>
        <Box>
        <Button component={Link} variant="contained" color="primary" href="/all-flats">All Flats
        </Button>
        </Box>
        

       
      </Box>
      <Box sx={{ flex: 1, width: '100%', height: 'auto' }}>
        <Image
          src={dhakaImage}
          alt="London"
          width={500}
          height={300}
          layout="responsive"
          style={{ borderRadius: 8 }}
        />
      </Box>
     
    </Box>
  );
};

export default PopularLocation;

// import { Box, Container, Typography, Button } from "@mui/material";
// import HeroForm from "./HeroForm";

// const HeroSection = async () => {


//     return (
//         <Container sx={{ textAlign: "center", my: 5 }}>
//             <Box component="div" sx={{
//                 maxWidth: "300px",
//                 backgroundColor: "#ffe0f2",
//                 padding: "5px",
//                 borderRadius: "20px",
//                 margin: "0 auto"
//             }}>
//                 <Typography sx={{
//                     fontWeight: 600,
//                     fontSize: 14
//                 }}>Trusted and loved by million users</Typography>
//             </Box>
//             <Typography variant="h3" component="h1" sx={{
//                 mt: 8,
//                 mb: 4,
//                 fontWeight: 600
//             }}>Find Your Perfect Flat-mate Today!</Typography>
//             <Typography sx={{
//                 color: "gray"
//             }}>Share your room</Typography>
//             <HeroForm />
            
//         </Container>
//     );
// };

// export default HeroSection;

