<?php

namespace AppBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CoachControllerTest extends WebTestCase
{
    public function testOverzichtklanten()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/overzichtKlanten');
    }

    public function testDetailklant()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/detailKlant');
    }

    public function testGeefhabitvoorklant()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/geefHabitVoorKlant');
    }

    public function testKlanthabitdetail()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/klantHabitDetail');
    }

}
