import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_conditionCreateInput } from "../../../inputs/Rule_conditionCreateInput";
import { Rule_conditionUpdateInput } from "../../../inputs/Rule_conditionUpdateInput";
import { Rule_conditionWhereUniqueInput } from "../../../inputs/Rule_conditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRule_conditionArgs {
  @TypeGraphQL.Field(_type => Rule_conditionWhereUniqueInput, {
    nullable: false
  })
  where!: Rule_conditionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Rule_conditionCreateInput, {
    nullable: false
  })
  create!: Rule_conditionCreateInput;

  @TypeGraphQL.Field(_type => Rule_conditionUpdateInput, {
    nullable: false
  })
  update!: Rule_conditionUpdateInput;
}
