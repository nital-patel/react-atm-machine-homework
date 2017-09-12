# React ATM machine App

![](https://media.giphy.com/media/3oriePkL53IxK0Aq52/giphy.gif)

It's tax season. Specifically, it's luxury tax season. You mission today, should you chose to accept it (*spoilers, you have to accept*) is to create one of those new fangled atm machines. 


## Setup

There are no files provided, that's because we're going to use our new friend `create-react-app`.


### Completion
Part 1 - 3

### Part 1

Let's create an `Account.js` and use it twice to pass the props `name`, once for "Checking" and once for "Savings". Both should return an `<h2>`, an `<h3>` an input field, and two buttons, one to `Deposit` and another to `Withdraw`.

So your `render` method should look something like this (there's more to it, but this is a decent starting point): 

```javascript

render(){
  return(
    <div>
    <Account name={'Checking'} />
    <Account name={'Savings'} />
    </div>
  )
}
```


#### Part 2 `src/Account.js`
1. Use the property you set in `App.js` and add it to the `<h2>`
2. Add a `balance` property to `state` and set to 0 initially
3. The `<h3>` should render `this.state.balance`
4. When the `Deposit` button is clicked, you should add the amount entered in a text field to the balance
5. When the `Withdraw` button is clicked, you should deduct the amount entered in a text field to the balance
  - You should not be able to withdraw more than the current balance
6. If the current balance is 0, you should add a class of `zero` to the `<div className="balance">` div

#### Part 3 - Error Handling
We can't always count on people using our applications correctly - in fact we should always assume that someone is trying to break our code! Your applications should always have some level of "error handling". Error handling is simply the concept of anticipating different ways that invalid user input could break your application and writing robust code to handle that gracefully.

Try handling these scenarios:
1. What if a User enters a negative number and clicks **Deposit**
2. What if a User enters a negative number and clicks **Withdraw**
3. What if a User enters a string and clicks Deposit or Withdraw?

## Bonus
Add the [accounting](https://www.npmjs.com/package/accounting) package to format the balance.
How might you show the total balance from both accounts as an `<h1>` in your `App.js` component?

## Hints
- Remember to set a `ref` on the text field for targeting
- The amount entered in the text field will initially be a string, so you'll need to convert that to a number
- Don't forget to `bind` your click methods!
