<?php

namespace AppBundle\Controller;

//use Doctrine\DBAL\Types\TextType;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\BrowserKit\Response;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use AppBundle\Entity\Klant;
use Symfony\Component\Form\Extension\Core\Type\TextType;
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
    public function detailKlantAction($klantid, Request $request)
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


/*

        $editedKlant = new Klant();

        $form= $this->createForm(Klant::class, $editedKlant);
        $form->handleRequest($request);

        if($form->isSubmitted()){
            $editedKlant = $form->getData();

            $em= $this->getDoctrine()->getEntityManager();
            $klantToEdit = $em->getRepository(Klant::class)->findOneBy(array("id" => $klantid));
            $klantToEdit->setNaam('naam');

            $em->flush();
        }
        */

        return $this->render('AppBundle:Coach:detail_klant.html.twig', array(
            'klantdetails' => $klantDetails,
            'progReport' => $progressReport,
        ));

    }


    /**
     * @Route("/nieuwKlant/", name="nieuwKlant")
     */
    public function maakNieuwKlantAction(Request $request){

        $klant = new Klant();

        /*
        $klant->setNaam("Nidz");
        $klant->setHabit1("doeIets1");
        $klant->setHabit2("doeIets2");
        $klant->setHabit3("doeIets3");
*/

        $form = $this->createFormBuilder($klant)
            ->add('naam', TextType::class)
            ->add('habit1', TextType::class)
            ->add('habit2', TextType::class)
            ->add('habit3', TextType::class)
            ->add('save', SubmitType::class, array('label'=> 'Nieuwe klant'))
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            // $form->getData() holds the submitted values
            // but, the original `$task` variable has also been updated
            $klant = $form->getData();

            $this->getDoctrine()->getEntityManager()->persist($klant);
            $this->getDoctrine()->getEntityManager()->flush();

            return $this->redirectToRoute('home');
        }

        return $this->render('AppBundle:Coach:nieuw_klant.html.twig', array(
            'form'=> $form->createView(),
        ));
    }

    /**
     * @Route("/klant/verwijderen/{klantid}", name="deleteKlant")
     */



   public function verwijderenAction($klantid)
   {
       $em= $this->getDoctrine()->getEntityManager();
        $klant = $em->getRepository(Klant::class)->findOneBy(array("id" => $klantid));


       $em->remove($klant);
       $em->flush();

       return $this->redirectToRoute('home');
   }


}