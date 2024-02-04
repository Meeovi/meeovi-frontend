import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_conditionWhereInput } from "../../../inputs/Rule_conditionWhereInput";

@TypeGraphQL.ArgsType()
export class Rule_conditionRule_conditionArgs {
  @TypeGraphQL.Field(_type => Rule_conditionWhereInput, {
    nullable: true
  })
  where?: Rule_conditionWhereInput | undefined;
}
