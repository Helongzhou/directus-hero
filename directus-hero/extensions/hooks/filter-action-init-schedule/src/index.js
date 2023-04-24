export default ({ filter, action,init,schedule }, { exceptions }) => {
  // 1.A filter hook that cancels the creation of an item if it does not meet certain criteria:
  // Import the exceptions object
  const { InvalidPayloadException } = exceptions
  // Register a filter event listener for items.create
  filter('items.create', async (input) => {
    // Check if the input meets some criteria
    if (input.title === "") {
      // Throw an InvalidPayloadException to cancel the event
	  throw new InvalidPayloadException("Title cannot be empty");
    }
    // Return the input unchanged
    return input
  })

  // 2.An action hook that logs a message after an item is created:
  // Register an action event listener for items.create
  action('items.create', () => {
    // Log a message to the console
    console.log('Item created!')
  })

  //3.An init hook that runs some logic when Directus starts:
  // Register an init event listener for startup
  init('startup', () => {
    // Run some logic when Directus starts
    console.log('Directus started!')
  })

  //4.A schedule hook that runs some logic at certain points in time:
  // Register a schedule event listener for every minute
  schedule('* * * * *', () => {
    // Run some logic every minute
    console.log('Hello world!')
  })
}
