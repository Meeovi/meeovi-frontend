import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_conditionCreateInput } from "../../../inputs/Rule_conditionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRule_conditionArgs {
  @TypeGraphQL.Field(_type => Rule_conditionCreateInput, {
    nullable: false
  })
  data!: Rule_conditionCreateInput;
}
