<?php

namespace AppBundle\Service;
class CoachService extends Controller {
    public function indexAction(){
        return $this->render('AppBundle:Coach:home.html.twig', array(
            // ...
        ));
    }
}
?>