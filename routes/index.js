var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/Contact-Us", function(req, res, next) {
  res.render("Contact-Us", { title: "Express" });
});
router.get("/about-us", function(req, res, next) {
  res.render("about-us", { title: "Express" });
});
router.get("/MEP-BIM-Modeling-protfolio", function(req, res, next) {
  res.render("MEP-BIM-Modeling-protfolio", { title: "Express" });
});
router.get("/Architectural-BIM-Modeling-protfolio", function(req, res, next) {
  res.render("Architectural-BIM-Modeling-protfolio", { title: "Express" });
});
router.get("/blog", function(req, res, next) {
  res.render("blog", { title: "Express" });
});
router.get("/gallery", function(req, res, next) {
  res.render("gallery", { title: "Express" });
});
router.get("/gallery-full-width", function(req, res, next) {
  res.render("gallery-full-width", { title: "Express" });
});
router.get("/Bim-Modeling", function(req, res, next) {
  res.render("Bim-Modeling", { title: "Express" });
});
router.get("/3D-Bim-Coordination", function(req, res, next) {
  res.render("3D-Bim-Coordination", { title: "Express" });
});
router.get("/Point-Cloud-to-BIM", function(req, res, next) {
  res.render("Point-Cloud-to-BIM", { title: "Express" });
});
router.get("/Revit-Family-Creation", function(req, res, next) {
  res.render("Revit-Family-Creation", { title: "Express" });
});
router.get("/Shop-Drawing", function(req, res, next) {
  res.render("Shop-Drawing", { title: "Express" });
});
router.get("/MEP-CAD-Drafting", function(req, res, next) {
  res.render("MEP-CAD-Drafting", { title: "Express" });
});
router.get("/creo-solidwork", function(req, res, next) {
  res.render("creo-solidwork", { title: "Express" });
});
router.get("/3D-Rendering", function(req, res, next) {
  res.render("3D-Rendering", { title: "Express" });
});
router.get("/thankyou", function(req, res, next) {
  res.render("thankyou", { title: "Express" });
});
router.get("/how-to-show-dimensions-in-autocad-2018", function(req, res, next) {
  res.render("how-to-show-dimensions-in-autocad-2018", { title: "Express" });
});

router.get("/MEP-Bim-Modeling", function(req, res, next) {
  res.render("MEP-Bim-Modeling", { title: "Express" });
});

router.get("/Architectural-Bim-Modeling", function(req, res, next) {
  res.render("Architectural-Bim-Modeling", { title: "Express" });
});

router.get("/Structural-Bim-Modeling", function(req, res, next) {
  res.render("Structural-Bim-Modeling", { title: "Express" });
});

router.get("/Clash-Detection", function(req, res, next) {
  res.render("Clash-Detection", { title: "Express" });
});

router.get("/Architectural-CAD-Drafting", function(req, res, next) {
  res.render("Architectural-CAD-Drafting", { title: "Express" });
});

router.get("/Structural-CAD-Drafting", function(req, res, next) {
  res.render("Structural-CAD-Drafting", { title: "Express" });
});
router.get("/Point-Cloud-to-BIM-protfolio", function(req, res, next) {
  res.render("Point-Cloud-to-BIM-protfolio", { title: "Express" });
});
router.get("/CAD-Drafting-protfolio", function(req, res, next) {
  res.render("CAD-Drafting-protfolio", { title: "Express" });
});
router.get("/Revit-Family-Creation-protfolio", function(req, res, next) {
  res.render("Revit-Family-Creation-protfolio", { title: "Express" });
});
router.get("/Shop-Drawing-protfolio", function(req, res, next) {
  res.render("Shop-Drawing-protfolio", { title: "Express" });
});
router.get("/3D-Rendering-protfolio", function(req, res, next) {
  res.render("3D-Rendering-protfolio", { title: "Express" });
});


















module.exports = router;
