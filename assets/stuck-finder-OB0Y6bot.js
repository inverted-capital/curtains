import{D as t}from"./index-lNgwdCew.js";const o=t("AI:stuck-finder"),i={find:{type:"object",description:'returns an array of objects that represent the solution to the problem.  In each object, there is a "path" key that is used to reference the help, and a "help" object containing the instructions required to solve the problem.  If the array is empty, then no suitable solutions could be found.',additionalProperties:!1,required:["goal"],properties:{goal:{type:"string",description:"the goal that the user wants to achieve"}}}},s={find:async({goal:e},n)=>{o("goal",e)}};export{i as api,s as functions};