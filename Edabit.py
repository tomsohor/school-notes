# txt = "hello world"
# print(len(txt)-len(set(txt)))

#find the repited digit
#print( True if len(set(str(89)))==1 else False)

#print([x for x in range(0,5)])
#print(list("hello world!"))

#check condition with date
# date = (2013, 1, 23)
# print(date[1],date[2])
# print(True if date[1]==12 and date[2]==24 else False)


#object or classes
# def sweetest_icecream(lst):
# 	flavor_values = {
# 	'Plain' :	0,
# 	'Vanilla' :	5,
# 	'ChocolateChip' :	5,
# 	'Strawberry' : 10,
# 	'Chocolate'	: 10
# 	}



# 	return max(i.num_sprinkles + flavor_values[i.flavor] for i in lst)
# class IceCream:
# 	def __init__(self, flavor, num_sprinkles):
# 		self.flavor = flavor
# 		self.num_sprinkles = num_sprinkles


#check type by type and instance method
# def stupid_addition(a, b):
# 	if type(a) is not type(b):
# 		return None
# 	else:
# 		if isinstance(a,str):
# 			return int(a)+int(b)
# 		if isinstance(a,int):
# 			return str(a)+str(b)



# def stupid_addition(a, b):
# 	if type(a) == int and type(b) == int:
# 		return str(a) + str(b)
# 	elif type(a) == str and type(b) == str:
# 		return int(a) + int(b)
# print(stupid_addition("1","2"))
# print(stupid_addition("1",0))
# print(stupid_addition(1,5))



#fiction number
# ex = [[36, 4], [22, 60]]
# print(round(sum([x[0]/x[1] for x in ex])))



# count same character in string 
# str = "Xxoo"
# print(str.lower().count('x')==str.lower().count('o'))



#substruct only int
# lst = [1, 2, "a", "b"]
# print([x for x in lst if type(x)==int])



#count each character
# 1 firsr way
# str = "hello world!! welcome here!!.."
# dic = {}
# for i in str:
#     if i in dic:
#         dic[i]+=1
#     else:
#         dic[i]=1
# print(dic)

# second way but need to import counter from collections
# from collections import Counter
# str = "hello world!! welcome here !!"
# res = Counter(str)
# print(res)


#fabinacci way1
# num = 1
# n1 = 0
# n2 = 1
# n3 = n1+n2
# for i in range (1,num):
#     n1 =n2
#     n2 =n3
#     n3 = n1+n2
# print(n3)

# way 2
def fibonacci(num):
	a, b = 1, 1
	for i in range(1, num):
		a, b = b, a+b
	return b
print(fibonacci(7))




