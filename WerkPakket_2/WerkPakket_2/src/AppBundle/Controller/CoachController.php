<?php

namespace AppBundle\Controller;

use Doctrine\ORM\EntityManager;
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
     * @Route("/home", name="home")
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
     * @Route("/klant/{klantid}", name="detailKlant")
     */
    public function detailKlantAction($klantid)
    {
        $klantDetails = $this->getDoctrine()
            ->getRepository('AppBundle:Klant')
            ->find($klantid);

        $progressReport = $this-> getDoctrine()
            ->getRepository('AppBundle:ProgressReport')
            ->findBy(array("klant" => $klantid), array('date'=>'desc'));

        if ($klantDetails === null) {
            return new View("user not found", Response::HTTP_NOT_FOUND);
        }

        return $this->render('AppBundle:Coach:detail_klant.html.twig', array(
            'klantdetails' => $klantDetails,
            'progReport' => $progressReport,
        ));
    }


    /**
     * @Route("/nieuwKlant/", name="nieuwKlant")
     */
    public function maakNieuwKlantAction(){
        return $this->render('AppBundle:Coach:nieuw_klant.html.twig', array(
        ));
    }

    /**
     * @Route("/saveNieuwKlant/", name="saveNieuwKlant")
     */
    public function saveNieuwKlantAction(Request $request){
/*
        $klant = new  klant();

        $klant->setNaam("Nidz");
        $klant->setHabit1("doeIets1");
        $klant->setHabit2("doeIets2");
        $klant->setHabit3("doeIets3");



        //$klant->setNaam($this->get('request')->request->get('naam'));

        $this->getDoctrine()->getEntityManager()->persist($klant);
        $this->getDoctrine()->getEntityManager()->flush();
*/



        // just setup a fresh $task object (remove the dummy data)
        $task = new Task();

        $form = $this->createFormBuilder($task)
            ->add('task', TextType::class)
            ->add('dueDate', DateType::class)
            ->add('save', SubmitType::class, array('label' => 'Create Task'))
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // $form->getData() holds the submitted values
            // but, the original `$task` variable has also been updated
            $task = $form->getData();

            // ... perform some action, such as saving the task to the database
            // for example, if Task is a Doctrine entity, save it!
            // $em = $this->getDoctrine()->getManager();
            // $em->persist($task);
            // $em->flush();

            return $this->redirectToRoute('task_success');
        }

        return $this->render('default/new.html.twig', array(
            'form' => $form->createView(),
        ));

    }

    /**
     * @Route("/klanten")
     */
    /*
    public function overzichtKlantenAction()
    {
        $klantenLijst = $this-> getDoctrine()
            ->getRepository('AppBundle:Klant')
            ->findAll();

        return $this->render('AppBundle:Coach:overzicht_klanten.html.twig', array(
            'klanten' => $klantenLijst,
        ));
    }
*/

    /**
     * @Route("/geefHabitVoorKlant")
     */
    /*
    public function geefHabitVoorKlantAction()
    {
        return $this->render('AppBundle:Coach:geef_habit_voor_klant.html.twig', array(
            // ...
        ));
    }
    */


    /**
     * @Route("/klant/HabitDetail/{klantid}")
     */
    /*
   public function klantHabitDetailAction()
   {


       $progressReport = $this-> getDoctrine()
           ->getRepository('AppBundle:ProgressReport')
           ->findAll();
       return $this->render('AppBundle:Coach:klant_habit_detail.html.twig', array(
           'progReport' => $progressReport,
       ));
   }
   */

}