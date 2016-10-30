<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ProgressReport
 *
 * @ORM\Table(name="progressreport")
 * @ORM\Entity
 */
class ProgressReport
{
    /**
     * @ORM\Column(name="id",type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime", nullable=false)
     */
    private $date = 'CURRENT_TIMESTAMP';

    /**
     * @var boolean
     *
     * @ORM\Column(name="progressHabit1", type="boolean", nullable=true)
     */
    private $progresshabit1;

    /**
     * @var boolean
     *
     * @ORM\Column(name="progressHabit2", type="boolean", nullable=true)
     */
    private $progresshabit2;

    /**
     * @var boolean
     *
     * @ORM\Column(name="progressHabit3", type="boolean", nullable=true)
     */
    private $progresshabit3;

    /**
     * @var float
     *
     * @ORM\Column(name="weight", type="float", precision=10, scale=0, nullable=true)
     */
    private $weight;

    /**
     * @var float
     *
     * @ORM\Column(name="calories", type="float", precision=10, scale=0, nullable=true)
     */
    private $calories;

    /**
     * @ORM\ManyToOne(targetEntity="Klant", inversedBy="klantReport")
     */
    private $klant;


private $voltooid= "Habit uitgevoerd";
private $nietVoltooid= "Habit niet uitgevoerd";

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
     * Set date
     *
     * @param \DateTime $date
     *
     * @return ProgressReport
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this-> date->format('d-m-Y');
        //return $this->date;
    }

    /**
     * Set progresshabit1
     *
     * @param boolean $progresshabit1
     *
     * @return ProgressReport
     */
    public function setProgresshabit1($progresshabit1)
    {
        $this->progresshabit1 = $progresshabit1;

        return $this;
    }

    /**
     * Get progresshabit1
     *
     * @return boolean
     */
    public function getProgresshabit1()
    {
        //return $this->progresshabit1;
        if ($this->progresshabit1 == 0){
            return $this->nietVoltooid;
        }else{return $this->voltooid;}

    }

    /**
     * Set progresshabit2
     *
     * @param boolean $progresshabit2
     *
     * @return ProgressReport
     */
    public function setProgresshabit2($progresshabit2)
    {
        $this->progresshabit2 = $progresshabit2;

        return $this;
    }

    /**
     * Get progresshabit2
     *
     * @return boolean
     */
    public function getProgresshabit2()
    {
        //return $this->progresshabit2;
        if ($this->progresshabit2 == 0){
            return $this->nietVoltooid;
        }else{return $this->voltooid;}
    }

    /**
     * Set progresshabit3
     *
     * @param boolean $progresshabit3
     *
     * @return ProgressReport
     */
    public function setProgresshabit3($progresshabit3)
    {
        $this->progresshabit3 = $progresshabit3;

        return $this;
    }

    /**
     * Get progresshabit3
     *
     * @return boolean
     */
    public function getProgresshabit3()
    {
        //return $this->progresshabit3;
        if ($this->progresshabit3 == 0){
            return $this->nietVoltooid;
        }else{return $this->voltooid;}

    }

    /**
     * Set weight
     *
     * @param float $weight
     *
     * @return ProgressReport
     */
    public function setWeight($weight)
    {
        $this->weight = $weight;

        return $this;
    }

    /**
     * Get weight
     *
     * @return float
     */
    public function getWeight()
    {
        return $this->weight;
    }

    /**
     * Set calories
     *
     * @param float $calories
     *
     * @return ProgressReport
     */
    public function setCalories($calories)
    {
        $this->calories = $calories;

        return $this;
    }

    /**
     * Get calories
     *
     * @return float
     */
    public function getCalories()
    {
        return $this->calories;
    }

    /**
     * Set klant
     *
     * @param \AppBundle\Entity\Klanten $klant
     *
     * @return ProgressReport
     */
    public function setKlant(\AppBundle\Entity\Klanten $klant = null)
    {
        $this->klant = $klant;

        return $this;
    }

    /**
     * Get klant
     *
     * @return \AppBundle\Entity\Klanten
     */
    public function getKlant()
    {
        return $this->klant;
    }



    function __toString()
    {
        return $this->date->format('d-m-Y'). " ".
        $this->getProgresshabit1()." ".
       $this->getProgresshabit2()." ".
       $this->getProgresshabit3()." ".
       $this->getWeight()." ".
       $this->getCalories();
    }


}
