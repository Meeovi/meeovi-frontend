import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_tagWhereUniqueInput } from "../../../inputs/Rule_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRule_tagArgs {
  @TypeGraphQL.Field(_type => Rule_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Rule_tagWhereUniqueInput;
}
