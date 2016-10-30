<?php

/**
 * Created by PhpStorm.
 * User: Wasla
 * Date: 10/30/2016
 * Time: 12:56 PM
 */
 namespace tests\AppBundle\Fixtures;
 use Symfony\Bundle\FrameworkBundle\Client;
 use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
 use Symfony\Component\DomCrawler\Crawler;

class TestCase extends WebTestCase
{
    protected $client;
    protected function setUp()
    {
        $this->initClient();
       $this->initDatabase();
    }
    protected function tearDown()
    {
        $this->client = null;
    }
    protected function initClient(array $options = array())
    {
        $this->client = static::createClient($options);
    }
    /**
     * It ensures that the database contains the original fixtures of the
     * application. This way tests can modify its contents safely without
     * interfering with subsequent tests.
     */

    protected function initDatabase()
    {
        $buildDir = __DIR__.'/../../build';
        copy($buildDir.'/original_test.db', $buildDir.'/test.db');
    }

    /**
     * @param array $queryParameters
     *
     * @return Crawler
     */
    protected function getBackendPage(array $queryParameters)
    {
        return $this->client->request('GET', '/admin/?'.http_build_query($queryParameters, '', '&'));
    }
    /**
     * @return Crawler
     */
    protected function getBackendHomepage()
    {
        return $this->getBackendPage(array('entity' => 'User', 'view' => 'list'));
    }
    /**
     * @return Crawler
     */
    protected function requestListView($entityName = 'User')
    {
        return $this->getBackendPage(array(
            'action' => 'list',
            'entity' => $entityName,
            'view' => 'list',
        ));
    }
    /**
     * @return Crawler
     */
    protected function requestShowView($entityName = 'User', $entityId = 1)
    {
        return $this->getBackendPage(array(
            'action' => 'show',
            'entity' => $entityName,
            'id' => $entityId,
        ));
    }
    /**
     * @return Crawler
     */
    protected function requestSearchView($searchQuery = 'use', $entityName = 'User')
    {
        return $this->getBackendPage(array(
            'action' => 'search',
            'entity' => $entityName,
            'query' => $searchQuery,
        ));
    }
    /**
     * @return Crawler
     */
    protected function requestNewView($entityName = 'User')
    {
        return $this->getBackendPage(array(
            'action' => 'new',
            'entity' => $entityName,
        ));
    }
    /**
     * @return Crawler
     */
    protected function requestEditView($entityName = 'User', $entityId = '2')
    {
        return $this->getBackendPage(array(
            'action' => 'edit',
            'entity' => $entityName,
            'id' => $entityId,
        ));
    }


}