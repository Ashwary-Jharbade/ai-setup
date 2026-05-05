#!/bin/bash

# Return the required JSON object on stdout using jq
jq -n '
  "\u001b[1m" as $bold |
  "\u001b[34m" as $blue |
  "\u001b[35m" as $magenta |
  "\u001b[36m" as $cyan |
  "\u001b[0m" as $reset |
  {
    decision: "allow",
    systemMessage: (
      $cyan + "╭──────────────────────────────────────────────────────────╮" + $reset + "\n" +
      $cyan + "│" + $reset + "  " + $bold + $magenta + "🚀 FLASHY LOG:" + $reset + " " + $blue + "A few files are being updated..." + $reset + "  " + $cyan + "│" + $reset + "\n" +
      $cyan + "╰──────────────────────────────────────────────────────────╯" + $reset
    )
  }
'
