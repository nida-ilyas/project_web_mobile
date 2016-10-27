<?php

/**
 * Created by PhpStorm.
 * User: Nida
 * Date: 27/10/2016
 * Time: 11:12
 */
namespace AppBundle\Service;
use Doctrine\ORM\EntityManager;
use AppBundle\Entity\Klant;
use AppBundle\Entity\KlantRepository;

class KlantService
{

    private $entityManager;
    private $klantRepository;
    private $klantForm;

    /**
     * KlantService constructor.
     * @param $entityManager
     * @param $klantRepository
     * @param $klantForm
     */
    public function __construct($entityManager, $klantRepository, $klantForm)
    {
        $this->entityManager = $entityManager;
        $this->klantRepository = $klantRepository;
        $this->klantForm = $klantForm;
    }

    public function fetchAllKlanten(){
        $klanten = $this-> klantRepository->findAll;
        return $klanten;
    }

}