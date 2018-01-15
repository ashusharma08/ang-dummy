using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MAPS_mvc.DALC;
using MAPS_mvc.Models;

namespace MAPS_mvc.BLC
{
    public class UsersBLC
    {
        private static IDALC _dalc;
        public UsersBLC(IDALC dalc)
        {
            _dalc = dalc;
        }

        public UserList GetUserList()
        {
            return _dalc.GetUserList();
        }
    }
}