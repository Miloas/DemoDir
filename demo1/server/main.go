package main

import (
  "net/http"
  "encoding/json"
)

//User : user info
type User struct {
    Name string `json:"name"`
    PassWord string `json:"pwd"`
}

func main(){
  http.Handle("/",http.FileServer(http.Dir("../client/dist")))
  http.HandleFunc("/user",func(w http.ResponseWriter,r *http.Request){
      guy := User{Name:"xiaoming",PassWord:"123456"}
      json.NewEncoder(w).Encode(guy)
  })
  http.ListenAndServe(":8080", nil)
}
