import { zip, sortBy } from "lodash";
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditRequest, Question } from '../entities';
import { questionOrderValue } from "./converter";
import {
  computeDifference,
  applyGap,
  totalCriteria,
  totalValues,
  _totalCriteria
} from "./algorithm";

@Injectable()
export class ProfileMatchingService {

  constructor (
    @InjectRepository(CreditRequest)
    private readonly _repo_cr: Repository<CreditRequest>,

    @InjectRepository(Question)
    private readonly _repo_question: Repository<Question>
  ) {}

  public async getWeightsAsArray () {
    let questions = await this._repo_question.find();
    questions = sortBy(questions, q => questionOrderValue(q));
    return questions.map(q => q.profileTarget);
  }

  public async run () {
    let questions = await this._repo_question.find();
    questions = sortBy(questions, q => questionOrderValue(q));

    let profileTargets = questions.map(q => q.profileTarget);
    let isCfArray = questions.map(q => q.isCf);
    let qOrderValues = questions.map(q => Math.floor(questionOrderValue(q)));

    // Get all CreditRequest.
    let crData = await this._repo_cr.find({
      // Don't forget to include the relations
      relations: [
        "answers",
        "answers.question",
        "member"
      ]
    });

    let crAnswers = crData.map(cr => cr.answers);
    // console.log(cr)
    let crAnswersOrdered = crAnswers
      .map(
        // Answers is [Answer] (Array of answer)
        answers => 
          // Sort each nested answer by its question order.
          sortBy(answers, 
            answer => questionOrderValue(answer.question)
          )
          // Pull out the weight
          .map(answer => answer.weight)
      );
    let diffs = computeDifference(crAnswersOrdered, profileTargets);
    let gapped = applyGap(diffs);
    let totalCoreAndSecond = _totalCriteria(gapped, isCfArray, qOrderValues);
    let weights = [0.15, 0.25, 0.25, 0.30, 0.05];
    let rankTotal = totalValues(totalCoreAndSecond, weights);

    return zip(crData, rankTotal).map(
      ([cr, rate]) => {
        return {
          ...cr,
          rate
        }
      }
    );
    // let weights = await this.getWeightsAsArray();
    // console.log(weights);
  }

}