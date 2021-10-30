import { AppBar, Box, Button, Container, Grid, Link, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import imgPreview1 from './main_project_preview_1.png';

function Home() {
    return (
        <div>
            <AppBar
                sx={{
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                    px: 12
                }}>
                <Toolbar
                    sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>EZLocalization</Typography>
                    {startButton()}
                </Toolbar>
            </AppBar>

            <Container
                disableGutters
                maxWidth={false}>
                <Box
                    bgcolor='primary.main'>
                    <Grid
                        container
                        sx={{ px: 24 }}>
                        <Grid item sm={6}>
                            <Box
                                width='70'
                                height='70vh'
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center">
                                <Typography
                                    variant="h6"
                                    align="center"
                                    color="text.secondary">
                                    EZLocalization
                                </Typography>
                                <Typography
                                    sx={{ my: 3 }}
                                    variant="h2"
                                    align="center"
                                    color="text.secondary">
                                    가장 쉬운 다국어 관리 도구
                                </Typography>
                                {startButton()}
                            </Box>
                        </Grid>
                        <Grid
                            item
                            sm={6}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center">
                            <img
                                width='500'
                                src={imgPreview1}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    height="300px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center">
                    <Typography
                        variant="h4"
                        sx={{ my: 3 }}
                        align="center"
                        color="text.primary">
                        다국어를 지원하면서 겪었던 다양한 문제들,<br />
                        EZLocalization이 해결해 드립니다.
                    </Typography>
                    {startButton()}
                </Box>

                {
                    createFeatureDescription(
                        "동시작업 지원",
                        "자유롭게 팀원들과 프로젝트를 공유하고, 함께 수정 할 수 있습니다.",
                        imgPreview1,
                        true
                    )
                }
                {
                    createFeatureDescription(
                        "버전 브랜칭 지원",
                        "버전을 완전히 다른 브랜치로 나누어, git 수준의 병행 진행이 가능합니다.",
                        imgPreview1,
                        false
                    )
                }
                {
                    createFeatureDescription(
                        "멀티 플랫폼",
                        "Android, iOS, Web 등 현존하는 대부분의 플랫폼에서 바로 읽을 수 있도록 지원합니다.",
                        imgPreview1,
                        true
                    )
                }

                <Box bgcolor='primary.light'>
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ py: 3 }}>
                        {'Copyright © '}
                        <Link color="inherit" href="https://ezlocalization.com/">
                            EZLocalization
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Box>


            </Container>
        </div >
    );
}

function startButton() {
    return (
        <Button
            sx={{
                backgroundColor: (theme) => theme.palette.grey[100],
                color: '#000000'
            }}
            variant="contained">
            시작 해보기
        </Button>
    )
}

function createFeatureDescription(title: String, message: String, img: string, isLeftDirection: Boolean) {

    function description() {
        return (
            <Grid
                item
                sm={6}
                display="flex"
                flexDirection="column"
                justifyContent="center">
                <Typography
                    variant="h2"
                    align={isLeftDirection ? `left` : `right`}
                    color="text.primary">
                    {title}
                </Typography>
                <Typography
                    sx={{ my: 3 }}
                    variant="h5"
                    align={isLeftDirection ? `left` : `right`}
                    color="text.primary">
                    {message}
                </Typography>
            </Grid>
        )
    }

    function image() {
        return (
            <Grid
                item
                sm={6}
                display="flex"
                flexDirection="column"
                justifyContent="center">
                <img width='500' src={img} />
            </Grid>
        )
    }

    return (
        <Container
            sx={{ my: 5 }}
            maxWidth='lg'>
            <Grid container>
                {isLeftDirection && description()}
                {image()}
                {!isLeftDirection && description()}
            </Grid>
        </Container>
    )
}

export default Home;
