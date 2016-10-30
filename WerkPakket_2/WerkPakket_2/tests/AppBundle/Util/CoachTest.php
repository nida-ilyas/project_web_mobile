<?php
/**
 * Created by PhpStorm.
 * User: Wasla
 * Date: 10/30/2016
 * Time: 12:04 PM
 */

namespace Tests\AppBundle\Util;
use AppBundle\Entity\Coach;


class CoachTest extends \PHPUnit_Framework_TestCase
{
    public function testUsername()
    {
        $coach = new Coach();
        $this->assertNull($coach->getNaam());

        $coach->setNaam('testcoach1');
        $this->assertSame('testcoach1', $coach->getNaam());
    }

    public function testEmail()
    {
        $coach = new Coach(); 
        $this->assertNull($coach->getEmail());

        $coach->setEmail('testcoach1@yahoo.com');
        $this->assertSame('testcoach1@yahoo.com', $coach->getEmail());
    }

}