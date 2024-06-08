import { Container, Grid, Typography, Card, Box, CardMedia, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import { Email, Phone, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import Image from 'next/image';

const AboutUsPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} justifyContent="center">
                    <Typography variant="h4" component="h1" textAlign="center" fontWeight={600} gutterBottom>
                        About Us
                    </Typography>
                </Grid>

                {/* <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia>
                            <Image src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png" alt="About Us Image" width={600} height={400} layout="responsive" />
                        </CardMedia>
                    </Card>
                </Grid> */}

                <Grid item xs={12} md={6} alignContent="center">
                    <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                        Mission Statement
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    At FlatFolk, our mission is to create vibrant, connected communities by providing a seamless platform for finding and sharing living spaces. We aim to foster a sense of belonging and convenience, ensuring that every resident feels at home and engaged with their neighbors. Through innovation and dedication, we strive to enhance the co-living experience, making it easier and more enjoyable for everyone.
                    </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                    Meet the FlatFolk Team
                    </Typography>
                    
                    <Typography variant="body1" gutterBottom>
                    Rakib Hasan- Co-Founder & CEO
                    With a background in real estate and a passion for community building, John leads FlatFolk with a vision to revolutionize urban living. His expertise in property management and technology drives the company&apos;s innovative solutions.
                    Sarah Johnson - Co-Founder & CTO
                    A tech enthusiast and coding expert, Sarah is the brain behind FlatFolk&apos;s seamless platform.
                    </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                        Contact Information
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Email />
                            </ListItemIcon>
                            <ListItemText primary="Email: contact@flatfolk.com" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Phone />
                            </ListItemIcon>
                            <ListItemText primary="Phone: 01731635367" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Facebook />
                            </ListItemIcon>
                            <ListItemText>
                                <Link href="https://www.facebook.com/profile.php?id=100010404703241" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Twitter />
                            </ListItemIcon>
                            <ListItemText>
                                <Link href="https://x.com/rakibhasan_12" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LinkedIn />
                            </ListItemIcon>
                            <ListItemText>
                                <Link href="https://www.linkedin.com/in/rakib-hasan-434935231/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </Link>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUsPage;