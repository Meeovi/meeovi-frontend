import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_conditionUpdateInput } from "../../../inputs/Rule_conditionUpdateInput";
import { Rule_conditionWhereUniqueInput } from "../../../inputs/Rule_conditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRule_conditionArgs {
  @TypeGraphQL.Field(_type => Rule_conditionUpdateInput, {
    nullable: false
  })
  data!: Rule_conditionUpdateInput;

  @TypeGraphQL.Field(_type => Rule_conditionWhereUniqueInput, {
    nullable: false
  })
  where!: Rule_conditionWhereUniqueInput;
}
