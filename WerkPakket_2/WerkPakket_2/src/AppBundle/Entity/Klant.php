<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * Klant
 *
 * @ORM\Table(name="klant")
 * @ORM\Entity
 */
class Klant
{
    /**
     *
     *
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     *
     *
     * @ORM\Column(name="naam", type="string", length=255, nullable=false)
     *  @Assert\NotBlank()
     */
    private $naam;

    /**
     *
     *
     * @ORM\Column(name="habit_1", type="string", length=255, nullable=false)
     *  @Assert\NotBlank()
     */
    private $habit1;

    /**
     *
     *
     * @ORM\Column(name="habit_2", type="string", length=255, nullable=false)
     *  @Assert\NotBlank()
     */
    private $habit2;

    /**
     *
     *
     * @ORM\Column(name="habit_3", type="string", length=255, nullable=false)
     *  @Assert\NotBlank()
     */
    private $habit3;

    /**
     * @ORM\OneToMany(targetEntity="ProgressReport",mappedBy="klant")
     */

    private  $klantReport;
    public function __construct()
    {
        $this->klantReport =
            new \Doctrine\Common\Collections\ArrayCollection();
    }





    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set naam
     *
     * @param string $naam
     *
     * @return Klant
     */
    public function setNaam($naam)
    {
        $this->naam = $naam;

        return $this;
    }

    /**
     * Get naam
     *
     * @return string
     */
    public function getNaam()
    {
        return $this->naam;
    }

    /**
     * Set habit1
     *
     * @param string $habit1
     *
     * @return Klant
     */
    public function setHabit1($habit1)
    {
        $this->habit1 = $habit1;

        return $this;
    }

    /**
     * Get habit1
     *
     * @return string
     */
    public function getHabit1()
    {
        return $this->habit1;
    }

    /**
     * Set habit2
     *
     * @param string $habit2
     *
     * @return Klant
     */
    public function setHabit2($habit2)
    {
        $this->habit2 = $habit2;

        return $this;
    }

    /**
     * Get habit2
     *
     * @return string
     */
    public function getHabit2()
    {
        return $this->habit2;
    }

    /**
     * Set habit3
     *
     * @param string $habit3
     *
     * @return Klant
     */
    public function setHabit3($habit3)
    {
        $this->habit3 = $habit3;

        return $this;
    }

    /**
     * Get habit3
     *
     * @return string
     */
    public function getHabit3()
    {
        return $this->habit3;
    }

    /**
     * Add klantReport
     *
     * @param \AppBundle\Entity\ProgressReport $klantReport
     *
     * @return Klant
     */
    public function addKlantReport(\AppBundle\Entity\ProgressReport $klantReport)
    {
        $this->klantReport[] = $klantReport;

        return $this;
    }

    /**
     * Remove klantReport
     *
     * @param \AppBundle\Entity\ProgressReport $klantReport
     */
    public function removeKlantReport(\AppBundle\Entity\ProgressReport $klantReport)
    {
        $this->klantReport->removeElement($klantReport);
    }

    /**
     * Get klantReport
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getKlantReport()
    {
        return $this->klantReport;
    }
    // user
    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User", inversedBy="klanten")
     *
     */
    protected $user; // $klant



    /**
     * Set user
     *
     * @param \AppBundle\Entity\User $user
     * @return Klant
     */
    public function setUser(\AppBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \AppBundle\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }
    public function __tostring()
    {
        return (string)$this->getNaam(). " ".
        $this->getHabit1().
        " ". $this->getHabit2().
        " ". $this->getHabit3();

    }

}
