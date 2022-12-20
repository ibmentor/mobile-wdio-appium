let SCREEN_SIZE;
/**
 * The values in the below object are percentages of the screen
 */
const SWIPE_DIRECTION = 
{
    down:  {start: { x: 50, y: 15 },
           end: { x: 50, y: 85 },},
    left:  {start: { x: 95, y: 50 },
           end: { x: 5, y: 50 },},
    right: {start: { x: 5, y: 50 },
           end: { x: 95, y: 50 },},
    up:    {start: { x: 50, y: 85 },
           end: { x: 50, y: 15 },},
};

// export default gestures {
    // /**
    //  * Check if an element is visible and if not scroll down a portion of the screen to
    //  * check if it visible after a x amount of scrolls
    //  *
    //  * @param {element} element
    //  * @param {number} maxScrolls
    //  * @param {number} amount
    //  */
    // static checkIfDisplayedWithScrollDown (element, maxScrolls, amount = 0) {
    //     if ((!element.isExisting() || !element.isDisplayed()) && amount <= maxScrolls) 
    //     {
    //         this.swipeUp(0.85);
    //         this.checkIfDisplayedWithScrollDown(element, maxScrolls, amount + 1);
    //     } 
    //     else if (amount > maxScrolls) 
    //     {
    //         throw new Error(`The element '${element}' could not be found or is not visible.`);
    //     }
    // }

    // // Swipe down based on a percentage
    
    // static swipeDown (percentage = 1) {
    //     this.swipeOnPercentage(
    //         this._calculateXY(SWIPE_DIRECTION.down.start, percentage),
    //         this._calculateXY(SWIPE_DIRECTION.down.end, percentage),
    //     );
    // }

    
    //  // Swipe Up based on a percentage
     
    // static swipeUp (percentage = 1) {
    //     this.swipeOnPercentage(
    //         this._calculateXY(SWIPE_DIRECTION.up.start, percentage),
    //         this._calculateXY(SWIPE_DIRECTION.up.end, percentage),
    //     );
    // }

   
    //  // Swipe left based on a percentage
     
    // static swipeLeft (percentage = 1) {
    //     this.swipeOnPercentage(
    //         this._calculateXY(SWIPE_DIRECTION.left.start, percentage),
    //         this._calculateXY(SWIPE_DIRECTION.left.end, percentage),
    //     );
    // }

    // // Swipe right based on a percentage
     
    // static swipeRight (percentage = 1) {
    //     this.swipeOnPercentage(
    //         this._calculateXY(SWIPE_DIRECTION.right.start, percentage),
    //         this._calculateXY(SWIPE_DIRECTION.right.end, percentage),
    //     );
    // }

    // /**
    //  * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are
    //  * percentages of the screen.
    //  *
    //  * @param {object} from { x: 50, y: 50 }
    //  * @param {object} to { x: 25, y: 25 }
    //  *
    //  * @example
    //  * <pre>
    //  *   // This is a swipe to the left
    //  *   const from = { x: 50, y:50 }
    //  *   const to = { x: 25, y:50 }
    //  * </pre>
    //  */
    // static swipeOnPercentage (from, to) {
    //     SCREEN_SIZE = SCREEN_SIZE || driver.getWindowRect();
    //     const pressOptions = this._getDeviceScreenCoordinates(SCREEN_SIZE, from);
    //     const moveToScreenCoordinates = this._getDeviceScreenCoordinates(SCREEN_SIZE, to);
    //     this.swipe(
    //         pressOptions,
    //         moveToScreenCoordinates,
    //     );
    // }

    // /**
    //  * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are in pixels.
    //  *
    //  * @param {object} from { x: 50, y: 50 }
    //  * @param {object} to { x: 25, y: 25 }
    //  *
    //  * @example
    //  * <pre>
    //  *   // This is a swipe to the left
    //  *   const from = { x: 50, y:50 }
    //  *   const to = { x: 25, y:50 }
    //  * </pre>
    //  */
    // static swipe (from, to) {
    //     driver.touchPerform([{
    //         action: 'press',
    //         options: from,
    //     }, {
    //         action: 'wait',
    //         options: { ms: 1000 },
    //     }, {
    //         action: 'moveTo',
    //         options: to,
    //     }, {
    //         action: 'release',
    //     }]);
    //     driver.pause(1000);
    // }

    // /**
    //  * Get the screen coordinates based on device screensize
    //  *
    //  * @param {number} screenSize 
    //  * @param {object} coordinates like { x: 50, y: 50 }
    //  *
    //  * @return {{x: number, y: number}}
    //  *
    //  * @private
    //  */
    // static _getDeviceScreenCoordinates (screenSize, coordinates) {
    //     return {
    //         x: Math.round(screenSize.width * (coordinates.x / 100)),
    //         y: Math.round(screenSize.height * (coordinates.y / 100)),
    //     };
    // }

    // /**
    //  * Calculate the x y coordinates based on a percentage
    //  *
    //  * @param {object} coordinates
    //  * @param {number} percentage
    //  *
    //  * @return {{x: number, y: number}}
    //  *
    //  * @private
    //  */
    // static _calculateXY ({ x, y }, percentage) {
    //     return {
    //         x: x * percentage,
    //         y: y * percentage,
    //     };
    // }

    export async function scrollToEnd()
    {
     //scroll to the end (not stable if element gets moved)
     await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    }

    //how to scroll appium WebDriverIO with javaScript? 

    export async function scrollIntoView(ele)
    {
     // scrollTextIntoView - more stable
    
     await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${ele}")`).click();

    }

    export async function scrollForward()
    {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    
    }

    export async function scrollBackward()
    {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    }


