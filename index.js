import express from 'express'
import axios from 'axios'

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
// router.get('^/$|/ejd', (req, res)=> {
//     res.json({
//         status: res.statusCode,
//         msg: "You are home."
//     })
// })

// make use of either axios or fetch.
// axios
router.get('^/$|home', async (req, res)=> {
    let response = await axios.get(dataUrl)
    let {home} = await response.data
    res.json({
        status: res.statusCode,
        home
    })
})

// fetch
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
    let params = +req.params.id
    let idx = params > 0 ? params - 1 : 0
    res.json({
        status: res.statusCode,
        testimonials: testimonials[idx]
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

router.post('/addResume', bodyParser.json(), async (req, res) => {
    try {
    let payload = req.body
    let response = await axios.post(dataUrl, {
            id: 5,
            year: new Date().getFullYear(),
            information: "idk bro",
            place: "in my head"
        })
        res.json({
            status: res.statusCode,
            info: response.data
        }
    )}
    catch(err) {
        console.log("error");
    }
})

router.patch('/updateResume', async (req, res) => {
     
})

router.delete('/deleteResume', async (req, res) => {

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})