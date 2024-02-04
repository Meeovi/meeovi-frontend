import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_conditionWhereUniqueInput } from "../../../inputs/Rule_conditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRule_conditionOrThrowArgs {
  @TypeGraphQL.Field(_type => Rule_conditionWhereUniqueInput, {
    nullable: false
  })
  where!: Rule_conditionWhereUniqueInput;
}
