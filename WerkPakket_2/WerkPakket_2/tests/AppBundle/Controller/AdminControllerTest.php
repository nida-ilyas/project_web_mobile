<?php
/**
 * Created by PhpStorm.
 * User: Wasla
 * Date: 10/30/2016
 * Time: 2:27 AM
 */

namespace Tests\AppBundle\Controller;
use AppBundle\Controller\AdminController;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
class AdminControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());

    }

    protected function EditView($entityName = 'User', $entityId = '2')
    {
        return array(
            'action' => 'edit',
            'entity' => $entityName,
            'id' => $entityId,
        );
    }
    public function testEditViewActions()
    {

        $crawler = $this->EditView();
      //  $this->assertEquals('_parent', $crawler->filter('.form-actions a:contains("Back to listing")')->attr('target'));
        $this->assertSame( array(
                                    'action' => 'edit',
                                    'entity' => 'User',
                                    'id' => '2',
                                   ) , $crawler);
        /*
        $this->assertEquals('_blank', $crawler->filter('.form-actions a:contains("Custom action")')->attr('target'));
        $this->assertEquals('_blank', $crawler->filter('.form-actions a:contains("Delete")')->attr('target'));
        $this->assertEquals('_blank', $crawler->filter('#modal-delete-button')->attr('formtarget'));
        */
    }


    protected function requestNewView($entityName = 'Klant')
    {
        return array(
            'action' => 'new',
            'entity' => $entityName,
        );
    }
    public function testNewViewActions()
    {
        $crawler = $this->requestNewView();
        $this->assertSame( array(
            'action' => 'new',
            'entity' => 'Klant',

        ) , $crawler);


       // $this->assertEquals('_top', $crawler->filter('.form-actions a:contains("Back to listing")')->attr('target'));
      // $this->assertEquals('_parent', $crawler->filter('.form-actions a:contains("Custom action")')->attr('target'));
    }

    protected function requestShowView($entityName = 'Coach', $entityId = 2)
    {
        return array(
            'action' => 'show',
            'entity' => $entityName,
            'id' => $entityId,
        );
    }
    public function testShowViewActions()
    {
        $crawler = $this->requestShowView();

        $this->assertSame( array(
            'action' => 'show',
            'entity' => 'Coach',
            'id'=> 2,

        ) , $crawler);
    }
    protected function requestSearchView($searchQuery = 'use', $entityName = 'User')
    {
        return array(
            'action' => 'search',
            'entity' => $entityName,
            'query' => $searchQuery,
        );
    }
    public function testSearchViewActions()
    {
        $crawler = $this->requestSearchView();

        $this->assertSame( array(
            'action' => 'search',
            'entity' => 'User',
            'query'=> 'use',

        ) , $crawler);

    }


    /*



     */
    /*




      */
}