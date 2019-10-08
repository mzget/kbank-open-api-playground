/*
* go version go1.11.5 darwin/amd64
* Author : nattapon.rat@kbtg.tech
 */
package main

import (
	"bytes"
	"crypto/tls"
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	keyPair, err := tls.LoadX509KeyPair("../kbank.pentest.1/kbank.pentest.1.crt", "../kbank.pentest.1/kbank.pentest.1.key")
	if err != nil {
		log.Fatalln("Unable to load cert", err)
	}

	requestBody, err := json.Marshal(map[string]string{
		"partnerId":     "PTR7033749",
		"partnerSecret": "421ca15f36ff4922ac47249af0530797",
	})
	if err != nil {
		log.Fatalln(err)
	}
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{
			InsecureSkipVerify: true,
			Certificates:       []tls.Certificate{keyPair},
		},
	}
	client := &http.Client{Transport: tr}
	resp, err := client.Post("https://apiportaltest.kasikornbank.com:12002/test/ssl", "application/json", bytes.NewBuffer(requestBody))
	if err != nil {
		log.Fatalln(err)
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	log.Println("verify result", string(body))
}
