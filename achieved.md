# Learning a bit of markdown and formatting

- Learned how to add link redirects:

```markdown
[Link](url)
```
[This is a rick roll](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

- Learned how to add images: 

```markdown
![Image](src)
```
![Image](Images/Dorel.png)
    
***DO NOT EXPECT ME TO PUT SERIOUS IMAGES***

- I learned to use codeblocks: 

````
```language
console.log('This is some code');
```
````

- Also learned about quotes: 

```markdown
    > This is a quote
```

> This is also a quote



- I learned how to add JavaScript scripts:

```html
    <!--It uses raw HTML `<script>` tag-->
    <script src="index.js"></script>
``` 

<style>
.finger-pointer {
    cursor: pointer;
}
</style>

<p onclick="alertClick()" id="demo" class="finger-pointer">Click this to get an alert</p>

# HTML and CSS

- Learned a little css:

```css
    /*class costumization*/
    .my-class {
        atribute: value;
    }
    /*element costumization*/
    element {
        atribute: value;
    }
    /*very little animation*/
    /*this is a pulse animation*/
    .pulse-effect {
        background-color: #f75454;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        position: relative;
        margin: auto;
    }

    .circle {
        position: absolute;
        background-color: #ff6565;
        height: 100%;
        width: 100%;
        border-radius: 100%;
        opacity: 0.5;
        animation: pulse 3s ease-out infinite;
    }

    .circle:nth-of-type(1) {
        animation-delay: -0.5s;
    }

    .circle:nth-of-type(2) {
        animation-delay: -1.0s;
    }

    .circle:nth-of-type(3) {
        animation-delay: -1.5s;
    }

    @keyframes pulse {
        100% {
            transform: scale(1.75);
            opacity: 0;
        }
    }
```

- Learned a bit of HTML: 
    
```html
    <!--simple hello world site-->
    <!DOCTYPE html>
    <html>
        <head>
            <title>Hi Mom!</title>
        </head>
        <body>
            <h1>Hello World!</h1>
            <p>Hi Mom!</p>
        </body>
    </html>
```

# Learned some c++ in school

- Some arrays and matrix

```c++
#include <iostream>
using namespace std; //I am aware it is bad practice

int main() {
    int vector[10] = {1, 2, 10, 6, 9 ,5, 3, 2, 69, 10}; // declaring the vector from the beginning
    int matrix[10][10]; // can be done the same with the matrix

    // reading input in the vector
    for (int i = 0; i < 10; i++)
        cin >> vector[i];
    
    // reading input in the matrix
    for (int i = 0; i < 10; i++)
        for (int j = 0; j < 10; j++)
            cin >> matrix[i][j];
    
    return 0;
}
```

# C# in Unity

- My only experince with c# is in unity:

```c#
// this script makes the camera follow the player in a 2D game
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    public Transform target;

    public float smoothSpeed = 0.125f;
    public Vector3 offset;

    void FixedUpdate()
    {
        Vector3 desiredPosition = target.position + offset;
        Vector3 smoothedPosition = Vector3.Lerp(transform.position, desiredPosition,
                                                    smoothSpeed * 0.5f);
        transform.position = smoothedPosition;
    }

}
```

# Python

- Learning python started more as a joke to make a spam discord bot:

```python
import pyautogui
import time
time.sleep(5) # from run you have 5 seconds to open discord

f = open("Rank", "r") # file with words to spam 

for word in f:
    pyautogui.typewrtie(word)
    pyautogui.press("enter")
```

# JavaScript

- I learned JavaScript in class when I was bored:

```javascript
// I learned a little javascript

// redirect with javascript
function redirect() {
    location.href = 'https://www.youtube.com/watch?v=DHjqpvDnNGE&t=4s';
}

// change text color with JavaScript
function changeTextColor() {
    document.getElementById('TEXT').style.color = 'lightcoral';
}

// use this with the `onclick` event 
function alertMessage() {
    alert('You have been alerted!');    
}
```

- The first JavaScript code I wrote was to make some text change color a few times:

```javascript
let clickNum = 0;

// this was used with the `onclick` event
function changeColor() {
    if (clickNum === 0) {
        document.getElementById('TEXT').style.color = 'aquamarine';
        clickNum = 1;
    }else if (clickNum === 1) {
        document.getElementById('TEXT').style.color = 'lightcoral';
        clickNum = 2;
    }else if (clickNum === 2) {
        document.getElementById('TEXT').style.color = 'whitesmoke';
        clickNum = 3;
        else if (clickNum === 3) {
            document.getElementById('TEXT').style.color = 'black';
            clickNum = 0;
        }
    }
}
```
> What does JavaScript have a `===` operator I will never understand.
>
> At least leave the `==` operator mean type and value identity and the `===` be only value identity

***

[Home](index.md)

[comment]: <> 'javascript script'
<script src="index.js"></script>