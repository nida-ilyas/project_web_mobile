<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\BrowserKit\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use AppBundle\Entity\Klant;

/**
 * Class CoachController
 * @package AppBundle\Controller
 * @Route("coach")
 **/

class CoachController extends Controller
{

    /**
     * @Route("/home")
     */
    public function homeAction()
    {
        /*
         * KLANTEN SERVICE
        $klantService = $this-> get("app.klant_service");
        $klantenlijst = $klantService->fetchAllKlanten();
        */


        $klanten = $this-> getDoctrine()
            ->getRepository('AppBundle:Klant')
            ->findAll();
        if ($klanten === null) {
            return new View("Er zijn geen klanten", Response::HTTP_NOT_FOUND);
        }
        return $this->render('AppBundle:Coach:home.html.twig', array(
            'klanten' => $klanten,
        ));

    }


    /**
     * @Route("/klanten")
     */
    public function overzichtKlantenAction()
    {
        $klantenLijst = $this-> getDoctrine()
            ->getRepository('AppBundle:Klant')
            ->findAll();

        /*
        if($klantenLijst === null){
            return new Response(
                '<html><body>Lucky number: '."Ok".'</body></html>');
        }

        */

        return $this->render('AppBundle:Coach:overzicht_klanten.html.twig', array(
            'klanten' => $klantenLijst,
        ));
    }

    /**
     * @Route("/klant/{klantid}", name="detailKlant")
     */
    public function detailKlantAction($klantid)
    {
        $klantDetails = $this->getDoctrine()
            ->getRepository('AppBundle:Klant')
            ->find($klantid);

        if ($klantDetails === null) {
            return new View("user not found", Response::HTTP_NOT_FOUND);
        }

        return $this->render('AppBundle:Coach:detail_klant.html.twig', array(
            'klantdetails' => $klantDetails,
        ));
    }


    /**
     * @Route("/geefHabitVoorKlant")
     */
    public function geefHabitVoorKlantAction()
    {
        return $this->render('AppBundle:Coach:geef_habit_voor_klant.html.twig', array(
            // ...
        ));
    }

    /**
     * @Route("/klantHabitDetail")
     */
    public function klantHabitDetailAction()
    {
        return $this->render('AppBundle:Coach:klant_habit_detail.html.twig', array(
            // ...
        ));
    }

}