<?php
namespace Tests\AppBundle\Util;
use AppBundle\Entity\User;

/**
 * Created by PhpStorm.
 * User: Wasla
 * Date: 10/30/2016
 * Time: 11:42 AM
 */
class UserTest extends \PHPUnit_Framework_TestCase
{

    public function testUsername()
    {
        $user = new User();
        $this->assertNull($user->getUsername());

        $user->setUsername('testuser1');
        $this->assertSame('testuser1', $user->getUsername());
    }

    public function testEmail()
    {
        $user = new User();
        $this->assertNull($user->getEmail());

        $user->setEmail('testuser1@yahoo.com');
        $this->assertSame('testuser1@yahoo.com', $user->getEmail());
    }

}