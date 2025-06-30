from colorama import Fore, Style, init
init(autoreset=True)

# Inside your menu:
print(Fore.CYAN + "\n====== 🧁 Bakery Inventory Tracker ======" + Style.RESET_ALL)
print(Fore.YELLOW + "1️⃣ View Inventory")
print("2️⃣ Add Stock")
print("3️⃣ Record Sale")
print("4️⃣ Add New Item")
print("5️⃣ Save & Exit")

# In a new function:
def add_new_item(inventory):
    item = input(Fore.MAGENTA + "🆕 Enter new item name: ").strip().title()
    if item in inventory:
        print(Fore.RED + "⚠️ That item already exists in inventory.")
        return
    try:
        quantity = int(input(Fore.MAGENTA + "🔢 Enter starting quantity: "))
        description = input(Fore.MAGENTA + "📝 Enter item description: ").strip()
        price = float(input(Fore.MAGENTA + "💰 Enter price per item: $"))
        inventory[item] = {'quantity': quantity, 'description': description, 'price': price}
        print(Fore.GREEN + f"✅ {item} added successfully!")
    except ValueError:
        print(Fore.RED + "❌ Invalid input. Please enter numbers for quantity and price.")
