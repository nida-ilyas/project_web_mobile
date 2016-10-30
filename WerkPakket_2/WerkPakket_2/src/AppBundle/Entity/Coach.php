<?php

namespace AppBundle\Entity;

use AppBundle\AppBundle;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use AppBundle\Entity\User;
/**
 * Coach
 *
 * @ORM\Table(name="coach")
 * @ORM\Entity
 */
class Coach  // (repositoryClass="AppBundle\Repository\CoachRepository")
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="naam", type="string", length=255)
     *  @Assert\NotBlank()
     */
    private $naam;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=100)
     *  @Assert\NotBlank()
     */
    private $email;


    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User", inversedBy="coaches")
     *
     * 
     */
    protected $user;
    /**
     * Set user
     *
     * @param \AppBundle\Entity\User $user
     * @return Coach
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


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }




    /**
     * Set =naam
     *
     * @param string $naam
     *
     * @return Coach
     */
    public function setnaam($naam)
    {
        $this->naam = $naam;

        return $this;
    }

    /**
     * Get naam
     *
     * @return string
     */
    public function getnaam()
    {
        return $this->naam;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return Coach
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }
}

