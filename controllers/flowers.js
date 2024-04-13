import { Flower } from "../models/flower.js";


function index(req, res){
  Flower.find({})
  .then(flowers => {
    console.log(flowers)
    res.render('flowers/index', {
      flowers: flowers
    })  
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newFlower(req, res) {
  res.render('flowers/new')
}

function create(req, res) {
  req.body.planted = false
  Flower.create(req.body)
  .then(flower => {
    res.redirect('flowers')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flowers')
  })
}



export {
  index,
  newFlower as new,
  create,
}