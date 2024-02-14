import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
import cors from 'cors'

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
    express.json(),
    express.urlencoded({
        extended: true
    }),
    cors(),
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

// router.get('^/$|home', async (req, res)=> {
//     let response = await axios.get(dataUrl)
//     let {home} = await response.data
//     res.json({
//         status: res.statusCode,
//         home
//     })
// })

// // fetch
// router.get('/resume', async (req, res) => {
//     let response = await fetch(dataUrl)
//     let {resume} = await response.json()
//     res.json({
//         status: res.statusCode,
//         resume
//     })
// })

// router.get('/testimonials', async (req, res) => {
//     let response = await fetch(dataUrl)
//     let {testimonials} = await response.json()
//     let params = +req.params.id
//     let idx = params > 0 ? params - 1 : 0
//     res.json({
//         status: res.statusCode,
//         testimonials: testimonials[idx]
//     })
// })
// router.get('/about', async (req, res) => {
//     let response = await fetch(dataUrl)
//     let {about} = await response.json()
//     res.json({
//         status: res.statusCode,
//         about
//     })
// })
// router.get('/skills', async (req, res) => {
//     let response = await fetch(dataUrl)
//     let {skills} = await response.json()
//     res.json({
//         status: res.statusCode,
//         skills
//     })
// })
// router.get('/projects', async (req, res) => {
//     let response = await fetch(dataUrl)
//     let {projects} = await response.json()
//     res.json({
//         status: res.statusCode,
//         projects
//     })
// })

// router.post('/addResume', bodyParser.json(), async (req, res) => {
//     try {
//     let payload = req.body
//     let response = await axios.post(dataUrl, {
//             id: 5,
//             year: new Date().getFullYear(),
//             information: "idk bro",
//             place: "in my head"
//         })
//         res.json({
//             status: res.statusCode,
//             info: response.data
//         }
//     )}
//     catch(err) {
//         console.log("error");
//     }
// })

// router.patch('/updateResume', bodyParser.json(), async (req, res) => {
     axios.patch(`${dataUrl}`,)
// })

// router.delete('/deleteResume', async (req, res) => {

// })

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })

//  => home
// ONLY GET METHODS WORK ON BROWSER
router.get('^/$|/ejd',async(req, res)=>{
    try{
        let response = await axios.get(dataURL)
    let {home} = await response.data
    res.json({
        method: req.method,
        status: res.statusCode,
        home
    })
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: "Error you have anxiety and depression"
        })
    }
    
})
// router.get('^/$|/expressJSONData', async(req, res)=>{
//     let response = await fetch(dataURL)
//     let {home} = await response.json()
//     res.json({
//         status: res.statusCode,
//         home
//     })
// })

// => skills
router.get('/skills', async (req, res)=>{
    try{
        let response = await fetch(dataURL)
    let {skills} = await response.json()
    res.json({
        method: req.method,
        status: res.statusCode,
        education
    })
    }catch(e){
        res.json({
            status: statusCode,
            msg: "Error Your father left you"
        })
    }
    
})
// router.get('/education/:id', async(req, res)=>{
//     let response = await fetch(dataURL)
//     let {education} = await response.json()
//     let params = +req.params.id
//     let idx = params > 0 ? params - 1 : 0
//     res.json({
//         link: req.url,
//         status: res.statusCode,
//         education: education[idx]
//     })
// })

// ANY OTHER METHODS NEED POSTMAN TO TEST API
router.post('/addSkills',bodyParser.json(), async(req, res)=>{
    try{
        let payload = req.body
        let response = await axios.post(dataURL,{
            id: payload.id,
            year: payload.year,
            description: payload.description,
            place: payload.place
        })
        res.json({
            method: req.method,
            status: res.statusCode,
            msg: "Data added successfully"
        })
        console.log(response.data);
    }catch(e){
        console.log('Your friends dont like you');
    }
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})







