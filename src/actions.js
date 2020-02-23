export const BUTTON_PRESSED = 'BUTTON_PRESSED'
export const CHANGE_TEXT = 'CHANGE_TEXT'

export function buttonPressed(number) {
  return { type: BUTTON_PRESSED, number }
}
export function changeText(text) {
  return { type: CHANGE_TEXT, text }
}