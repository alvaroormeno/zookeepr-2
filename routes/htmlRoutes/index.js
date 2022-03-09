const path = require('path');
const router = require('express').Router();


//ROUTE FOR INDEX.HTML
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
  
//ROUTE FOR ANIMALS.HTML
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});
  
//ROUTE FOR ZOOKEEPR.HTML
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});
  
//WILDCARD ROUTE... IF COSTUMER REQUESTS A ROUTE THAT DOESNT EXIST
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports  = router;
