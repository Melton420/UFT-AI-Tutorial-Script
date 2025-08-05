AIUtil("button", "CHECKOUT ($299.99)").Click
AIUtil.FindTextBlock("$299.99", micFromBottom, 1).CheckExists True
AIUtil("button", "NEXT").Click
AIUtil("button", "PAY NOW").Click
