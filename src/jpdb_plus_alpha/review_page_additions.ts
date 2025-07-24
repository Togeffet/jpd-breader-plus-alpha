// @reader content-script

const continue_reviewing_form = document.querySelectorAll<HTMLElement>('form')[0];
const stop_reviewing_form = document.querySelectorAll<HTMLElement>('form')[1];

// If you get to a "would you like to continue reviewing?" screen
if (continue_reviewing_form && continue_reviewing_form.innerHTML.includes('Yes, keep going!')) {
  // Switch focus to the "Continue" button (idk why it's not auto selected tbh)
  (stop_reviewing_form.childNodes[1] as HTMLInputElement).blur();
  (continue_reviewing_form.childNodes[1] as HTMLInputElement).focus();
}
