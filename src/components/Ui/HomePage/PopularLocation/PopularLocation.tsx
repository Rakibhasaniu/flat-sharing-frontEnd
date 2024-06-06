import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import dhakaImage from '@/assets/dhakaCity.jpg';
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
        Discover Ideal Flat Shares in Bangladesh with FlatFolk
        </Typography>
        <Typography variant="body1" paragraph>
        Discover the best flat shares in Bangladesh with FlatFolk! Whether you are a student, professional, or anyone looking for a comfortable and affordable living space, our platform offers a wide range of options tailored to your needs. Find your ideal flat share, connect with like-minded individuals, and experience the convenience and community of co-living in Bangladesh. Start your journey with FlatFolk today and find a place to call home.
        </Typography>
        <Button component={Link} variant="contained" color="primary" href="/all-flats">
          Explore Flats
        </Button>
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