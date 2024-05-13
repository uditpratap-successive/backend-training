## Express Middleware
<p align = "justify">
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
</p>

Developers can write their own middleware functions. The only difference middleware function and the router handler is that a middleware funtion has a third parameter next which middle ware functions are expected to call if they are not that which complete the request cycle.

Middleware functions can perform the following tasks:
<ul>
<li align = "justify"> Execute any code. </li>
<li align = "justify"> Make changes to the request and the response objects.</li>
<li align = "justify"> End the request-response cycle.</li>
<li align = "justify"> Call the next middleware function in the stack. </li>
<li align = "justify"> If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging. </li>
</ul>


# REST API
## What is an API ?

<p align = "justify">
An API, or application programming interface, is a set of rules or protocols that enables software applications to communicate with each other to exchange data, features and functionality.

<p align = "justify">
APIs allow for the sharing of only the information necessary, keeping other internal system details hidden, which helps with system security. Servers or devices do not have to fully expose data—APIs enable the sharing of small packets of data, relevant to the specific request.

## REST (representational state transfer)
<p align = "justify">
REST is a set of web API architecture principles. REST APIs—also known as RESTful APIs—are APIs that adhere to certain REST architectural constraints. REST APIs use HTTP requests such as GET, PUT, HEAD and DELETE to interact with resources. REST makes data available as resources, with each resource represented by a unique URI. Clients request a resource by providing its URI.



## How an API Works ?

The application submitting the request is the client, and the server provides the response. The API is the bridge establishing the connection between them.

The Process of API works in the following manner: 

<ul>
  <li>
    Whenever the user clicks on a button / initiates an event that would trigger an API request, in that case, a new API request is triggered and is sent to the servers. The API has the URI embedded which tells the browser as to where the request is to be sent.
  </li>
  <li>
    After receiving a valid request, from the client,the API calls to the external program or web server, in this case, the third-party payment system.
  </li>
  <li>
    The server sends a response to the API with the requested information.
  </li>
  <li>
    The API transfers the data to the initial requesting application, in this case, the product website.
  </li>

</ul>