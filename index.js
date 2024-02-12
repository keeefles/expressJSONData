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
router.get('/resume', async (req, res) => {
    let {resume} = await (await fetch(dataUrl)).json()
    res.json({
        status: res.statusCode,
        resume
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})