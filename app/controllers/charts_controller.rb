class ChartsController < ApplicationController
  def bestsellers
    @bestsellers = Book.where.not(bestseller_rank: nil).order('bestseller_rank ASC')
    render json: @bestsellers.to_json
  end

  def wpm_history
    if current_user
      wpms = []
      current_user.reading_tests.each{|test| wpms << test.wpm}

      render json: {tests: current_user.reading_tests, wpms: wpms}.to_json
    else
      render nothing: true
    end
  end

  def wpm_comparison
    if current_user
      user_wpm = current_user.reading_tests.last.wpm 

      sum = 0
      ReadingTest.all.each do |test|
        sum += test.wpm
      end
      avg_wpm = sum/ReadingTest.all.length

      render json: {user_wpm: user_wpm, avg_wpm: avg_wpm}.to_json
    else
      render nothing: true
    end

  end


end
