import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_tagUpdateInput } from "../../../inputs/Rule_tagUpdateInput";
import { Rule_tagWhereUniqueInput } from "../../../inputs/Rule_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRule_tagArgs {
  @TypeGraphQL.Field(_type => Rule_tagUpdateInput, {
    nullable: false
  })
  data!: Rule_tagUpdateInput;

  @TypeGraphQL.Field(_type => Rule_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Rule_tagWhereUniqueInput;
}
