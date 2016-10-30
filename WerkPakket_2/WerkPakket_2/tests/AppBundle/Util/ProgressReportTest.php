<?php
/**
 * Created by PhpStorm.
 * User: Wasla
 * Date: 10/30/2016
 * Time: 12:23 PM
 */

namespace Tests\AppBundle\Util;
use AppBundle\Entity\ProgressReport;

class ProgressReportTest extends \PHPUnit_Framework_TestCase
{

    public function testWeight()
    {
        $progressReport = new ProgressReport();
        $this->assertNull($progressReport->getWeight());

        $progressReport->setWeight(60);
        $this->assertSame(60, $progressReport->getWeight());
    }

        public function testCalories()
    {
        $progressReport = new ProgressReport();
        $this->assertNull($progressReport->getCalories());

        $progressReport->setCalories(60);
        $this->assertSame(60, $progressReport->getCalories());
    }




}