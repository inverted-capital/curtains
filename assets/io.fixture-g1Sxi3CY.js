import{s as o}from"./io-hooks-DptC7XeV.js";import{D as p}from"./index-lNgwdCew.js";const n=p("AI:io.fixture"),a={spawn:{description:"ping the AI",type:"object",additionalProperties:!1,properties:{isolate:{type:"string"}}},pong:{description:"ping the AI",type:"object",properties:{}},local:{description:"ping locally",type:"object",properties:{}}},c={spawn:async({isolate:t})=>{n("spawn",t);const{pong:e}=await o(t);return await e()},pong:async()=>"remote pong",local:async()=>"local reply"};export{a as api,c as functions};