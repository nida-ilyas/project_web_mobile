<?php
/**
 * Created by PhpStorm.
 * User: Wasla
 * Date: 10/30/2016
 * Time: 12:04 PM
 */

namespace Tests\AppBundle\Util;
use AppBundle\Entity\Klant;


class KlantTest extends \PHPUnit_Framework_TestCase
{
/*
    protected $klant ;
    public function setUp()
    {

        // parent::setUpBeforeClass();
        $this->klant = new Klant();
        $this->klant->setNaam('klant2');
        $this->klant->setHabit1('Geen frietjes eten');
        //  $em = $this->getDoctrine()->getManager();
        // $em->persist($this->klant);
        // $em->flush();
    }
*/

    public function testUsername()
    {
       $klant  = new Klant();
        $this->assertNull($klant->getNaam());

        $klant->setNaam('testklant1');
        $this->assertSame('testklant1', $klant->getNaam());
    }

    public function testhabit1()
    {
        $klant  = new Klant();
        $this->assertNull($klant->getHabit1());

        $klant->setHabit1('Geen frietjes eten.');
        $this->assertSame('Geen frietjes eten.', $klant->getHabit1());
    }
    public function testhabit2()
    {
        $klant  = new Klant();
        $this->assertNull($klant->getHabit2());

        $klant->setHabit2('Meer water drinken.');
        $this->assertSame('Meer water drinken.', $klant->getHabit2());
    }
    public function testhabit3()
    {
        $klant  = new Klant();
        $this->assertNull($klant->getHabit3());

        $klant->setHabit3('5km wandelen.');
        $this->assertSame('5km wandelen.', $klant->getHabit3());
    }

}