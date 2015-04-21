class Card < ActiveRecord::Base

	def to_s
		self.size
	end

end