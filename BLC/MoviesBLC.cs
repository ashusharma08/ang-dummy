using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MAPS_mvc.DALC;
using MAPS_mvc.Models;

namespace MAPS_mvc.BLC
{
    public class MoviesBLC
    {
        private IDALC _dalc;
        public MoviesBLC(IDALC dalc)
        {
            _dalc = dalc;
        }

        public MovieList GetMoviesList()
        {
            return _dalc.GetMoviesList();
        }
    }
}