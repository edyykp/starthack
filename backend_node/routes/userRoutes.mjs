import express from 'express';
import User from '../models/userModel.mjs';
import sendEmail from '../email.send.mjs';
import templates from '../email.templates.mjs';

const router = express.Router();

router.post('/storeemail', async function(req, res) {
    const {email} = req.body.email;
    const user = new User({
        email: email
    });
    try {
        const newUser = await user.save();
        try {
            sendEmail(newUser.email, templates.confirm(newUser._id));
        }
        catch(error) {
            console.log(error.message);
            res.status(401).send("error at sending email");
        }
        res.send(user);
    }
    catch(error) {
        res.status(401).send("error at email registration");
    }
});

router.get('/getverification/:email', async function(req, res) {
    const user = await User.findOne({
        email: req.params.email
    });

    try {
        res.send(user);
    }
    catch(error) {
        res.status(401).send("error at fetching email verification code");
    }
});


router.put('/confirmemail/:id', async (req, res) => {
    const id  = req.params.id;
    console.log(id);
    const user = await User.findById(id);
    console.log(user);
      if (!user) {
          console.log("aici");
        res.send({ msg: msgs.couldNotFind })
      }
      else if (user && !user.confirmedEmail) {
          console.log("updatez");
          user.confirmedEmail = true;
          await user.save();
          res.send({ msg: msgs.confirmed });
        }
        else  {
            console.log("de ce ai fi aici");
          res.send({ msg: msgs.alreadyConfirmed });
        }
  });
export default router;