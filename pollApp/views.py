from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Question, Choice
from django.http import Http404
import os
from django.urls import path


# Create your views here.

def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'pollApp/index.html', context)

def detail(request, question_id):
    try:
        question = Question.objects.get(pk = question_id)
    except Question.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, 'pollApp/detail.html', {'question': question})

def results(request, question_id):
    question = get_object_or_404(Question, pk = question_id)
    return render(request, 'pollApp/results.html', {'question': question})

def vote(request, question_id):
    question = get_object_or_404(Question, pk = question_id)
    try:
        selected_choice = question.choice_set.get(pk = request.POST['choice'])
        selected_name = request.POST.get('name')
    except (KeyError, Choice.DoesNotExist):
        return render(request, 'pollApp/detail.html', {'question': question, 'error message': 'You did not select a choice'})
    else:
        selected_choice.votes += 1
        selected_choice.save()
        file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), './data.txt')

        with open(file_path, 'a') as f:
            f.write(f"Name:{selected_name}, Choice:{selected_choice.choice_text}\n")
        return HttpResponseRedirect(reverse('pollApp:results', args = (question.id,)))
    
    
        
    








