class LinksController < ApplicationController
  before_action :load_link, only: [:show, :edit]
  # before_action :find_link_by_curl_id, only: [:update]

  def index
    @links = Link.all.order("created_at DESC")
  end

  def new
  end

  def show
    render
  end

  def create
    @link = Link.new(link_params)
    @link.assign_random_string_to_curl_id
    if @link.save
      render status: :ok, json: { notice: 'Link was successfully created', id: @link.id }
    else
      errors = @link.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors  }
    end
  end

  def update 
    p params, "PARAMS"
    @link = Link.find_by(curl_id: params[:curl_id])
    @link.click_count += 1

    if @link.save
      render status: :ok, json: { notice: 'Link was successfully updated' }
    else
      errors = @link.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors  }
    end
  end

  def edit
    @link.is_pinned = !@link.is_pinned

    if @link.save
      render status: :ok, json: { notice: 'Pinned successfully' }
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
      rescue ActiveRecord::RecordNotFound => errors
        render json: {errors: errors}
    end
end
