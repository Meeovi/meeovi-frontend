import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_tagCreateInput } from "../../../inputs/Rule_tagCreateInput";
import { Rule_tagUpdateInput } from "../../../inputs/Rule_tagUpdateInput";
import { Rule_tagWhereUniqueInput } from "../../../inputs/Rule_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRule_tagArgs {
  @TypeGraphQL.Field(_type => Rule_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Rule_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Rule_tagCreateInput, {
    nullable: false
  })
  create!: Rule_tagCreateInput;

  @TypeGraphQL.Field(_type => Rule_tagUpdateInput, {
    nullable: false
  })
  update!: Rule_tagUpdateInput;
}
