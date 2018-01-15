using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MAPS_mvc.Models;

namespace MAPS_mvc.DALC
{
    public class MoviesDALC : IDALC
    {
        public MovieList GetMoviesList() => new MovieList
        {
            Movies = new List<Movie> {
                new Movie { Name = "Taken", Description = "Daughter kidnapped", Genre="Action" },
                new Movie { Name = "Taken 2", Description = "Wife kidnapped" , Genre="Action"},
                new Movie { Name = "Fault in our stars", Description = "both people died" , Genre="Tragedy"},
                new Movie { Name = "Interstellar", Description = "space me gum" , Genre="Sci-fi"},
                new Movie { Name = "Step up", Description = "dance and dance" , Genre="Dance"},
                new Movie { Name = "Conjuring", Description = "Wife kidnapped" , Genre="Scary"},
                new Movie { Name = "Step up 2", Description = "Wife kidnapped" , Genre="Dance"},
                new Movie { Name = "Step up 3", Description = "Wife kidnapped" , Genre="Dance"},
                new Movie { Name = "Transformers", Description = "Wife kidnapped" , Genre="Action"},
                new Movie { Name = "Fast and furious", Description = "Wife kidnapped" , Genre="Thriller"},
                new Movie { Name = "Random movie", Description = "Wife kidnapped" , Genre="Romance"},
            }
        };



        public UserList GetUserList()
        {
            throw new NotImplementedException();
        }
    }
}