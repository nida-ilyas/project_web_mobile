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


    public function __construct()
    {
        parent::__construct();
        // your own logic
    }


}
