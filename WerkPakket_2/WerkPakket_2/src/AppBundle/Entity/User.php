<?php

/**
 * Created by PhpStorm.
 * User: Wasla
 * Date: 10/25/2016
 * Time: 1:16 PM
 */
namespace AppBundle\Entity;
use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\Common\Collections\ArrayCollection;




/**
 * @ORM\Table("gebruiker")
 * @ORM\Entity
 */

class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;



    // coach toevoegen

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Coach", mappedBy="user")
     */
    protected $coaches;

    // klant toevoegen
    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Klant", mappedBy="user")
     */
    protected $klanten;

    public function __construct()
    {
        parent::__construct();
        $this->coaches = new ArrayCollection();
        $this->klanten = new ArrayCollection();

    }

    /**
     * Add coaches
     *
     * @param \AppBundle\Entity\Coach $coaches
     * @return User
     */
    public function addCoach(\AppBundle\Entity\Coach $coaches)
    {
        $this->coaches[] = $coaches;

        return $this;
    }
    /**
     * Remove coaches
     *
     * @param \AppBundle\Entity\Coach $coaches
     */
    public function removeCoach(\AppBundle\Entity\Coach $coaches)
    {
        $this->coaches->removeElement($coaches);
    }

    /**
     * Get coaches
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCoaches()
    {
        return $this->coaches;
    }





    /**
     * Add klanten
     *
     * @param \AppBundle\Entity\Klant $klanten
     * @return User
     */
    public function addKlant(\AppBundle\Entity\Klant $klanten)
    {
        $this->klanten[] = $klanten;

        return $this;
    }

    /**
     * Remove klanten
     *
     * @param \AppBundle\Entity\Klant $klanten
     */
    public function removeKlant(\AppBundle\Entity\Klant $klanten)
    {
        $this->klanten->removeElement($klanten);
    }

    /**
     * Get klanten
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getKlanten()
    {
        return $this->klanten;
    }




}
