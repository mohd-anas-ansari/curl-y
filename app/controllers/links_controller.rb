class LinksController < ApplicationController
  before_action :load_link, only: [:show]
  def index
    @links = Link.all
  end

  def new
  end

  def show
    render
  end

  def create
    @link = Link.new(link_params)
    if @link.save
      render status: :ok, json: { notice: 'Link was successfully created', id: @link.id }
    else
      errors = @link.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors  }
    end
  end

  private

    def link_params
      params.require(:link).permit(:title, :source_url)
    end

    def load_link
      @link = Link.find(params[:id])
      puts @link, "LINK"
      rescue ActiveRecord::RecordNotFound => errors
        render json: {errors: errors}
  end
end
