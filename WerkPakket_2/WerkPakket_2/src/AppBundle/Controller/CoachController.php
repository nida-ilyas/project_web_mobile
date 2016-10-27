<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
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
        return $this->render('AppBundle:Coach:home.html.twig', array(
            // ...
        ));
    }


    /**
     * @Route("/overzichtKlanten")
     */
    public function overzichtKlantenAction()
    {
        $klantService = $this-> get("app.klant_service");
        $klantenLijst = $klantService-> fetchAllKlanten;

        return $this->render('AppBundle:Coach:overzicht_klanten.html.twig', array(
            'klanten' => $klantenLijst,
        ));
    }

    /**
     * @Route("/detailKlant")
     */
    public function detailKlantAction()
    {
        return $this->render('AppBundle:Coach:detail_klant.html.twig', array(
            // ...
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
