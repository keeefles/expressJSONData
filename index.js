import express from 'express'

// express app
const app = express()
// router
const router = express.Router()
// path
const port = +process.env.PORT || 4000
// JSON URL
const dataUrl = 'https://keeefles.github.io/vuePortfolioData/data/'

// application middleware
app.use(
    router
)

// / => home
router.get('^/$|/ejd', (req, res)=> {
    res.json({
        status: res.statusCode,
        msg: "You are home."
    })
})

// resume
// router.get('/resume', async (req, res) => {
//     let {resume} = await (await fetch(dataUrl)).json()
//     res.json({
//         status: res.statusCode,
//         resume
//     })
// })
router.get('/resume', async (req, res) => {
    let response = await fetch(dataUrl)
    let {resume} = await response.json()
    res.json({
        status: res.statusCode,
        resume
    })
})
router.get('/testimonials', async (req, res) => {
    let response = await fetch(dataUrl)
    let {testimonials} = await response.json()
    res.json({
        status: res.statusCode,
        testimonials
    })
})
router.get('/home', async (req, res) => {
    let response = await fetch(dataUrl)
    let {home} = await response.json()
    res.json({
        status: res.statusCode,
        home
    })
})
router.get('/about', async (req, res) => {
    let response = await fetch(dataUrl)
    let {about} = await response.json()
    res.json({
        status: res.statusCode,
        about
    })
})
router.get('/skills', async (req, res) => {
    let response = await fetch(dataUrl)
    let {skills} = await response.json()
    res.json({
        status: res.statusCode,
        skills
    })
})
router.get('/projects', async (req, res) => {
    let response = await fetch(dataUrl)
    let {projects} = await response.json()
    res.json({
        status: res.statusCode,
        projects
    })
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})