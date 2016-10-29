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
    public function __construct(EntityManager $entityManager,
                                KlantRepository $klantRepository)
    {
        $this->entityManager = $entityManager;
        $this->klantRepository = $klantRepository;

    }

    public function fetchAllKlanten(){
        $klanten = $this-> klantRepository->findAll;
        return $klanten;
    }

}