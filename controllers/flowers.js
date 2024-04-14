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
    res.redirect(`/flowers/${flower._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flowers')
  })
}

function show(req, res) {
  Flower.findById(req.params.flowerId)
  .then(flower => {
    res.render('flowers/show', {
      flower: flower
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flowers')
  })
}

function deleteFlower(req, res) {
  Flower.findByIdAndDelete(req.params.flowerId)
  .then(flower => {
    res.redirect('/flowers')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flowers')
  })
}

function edit(req, res) {
  Flower.findById(req.params.flowerId)
  .then(flower => {
    res.render('flowers/edit', {
      flower: flower
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flowers')
  })
}

function update(req, res) {
  req.body.planted =!!req.body.planted
  Flower.findByIdAndUpdate(req.params.flowerId, req.body, {new: true})
  .then(flower => {
    res.redirect(`flowers/${req.params.flowerId}`)
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
  show,
  deleteFlower as delete,
  edit,
  update,
}
  