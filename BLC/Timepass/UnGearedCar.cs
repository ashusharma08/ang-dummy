using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MAPS_mvc.BLC.Timepass
{
    public class UnGearedCar : INonGearedCar
    {
        public void Drive()
        {
            throw new NotImplementedException();
        }

        public void NoStick()
        {
            throw new NotImplementedException();
        }
    }
}