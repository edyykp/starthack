import express from 'express';
import Project from '../models/projectModel.mjs';


const router = express.Router();

router.post('/storeproject', async function(req, res) {
    // var yourval = jQuery.parseJSON(JSON.stringify(Project));
    // console.log(yourval);
    //console.log(JSON.stringify(req.body));
     var obj = JSON.parse(JSON.stringify(req.body));
     console.log(obj.cityName);
    const project = new Project({
        cityName: obj.cityName,
        description: obj.description,
        category: obj.category,
        jobsCreatedNumber: obj.jobsCreatedNumber,
        advantages: obj.advantages,
        disadvantages: obj.disadvantages
    })
    
    try {
        await project.save();
        res.send(project);
        
    }
    catch(error) {
        console.log(error);
        res.status(401).send("error adding project");
    }
});

router.get('/getprojects', async function(req, res) {
   var cityNameActual = req.body.cityName;
     console.log(Project.find({}));
    console.log("sunt in getverification");
    try {
       console.log("sunt in try");
       res.send("ok");
    }
    catch(error) {
        res.status(401).send(error);
    }

})
export default router;