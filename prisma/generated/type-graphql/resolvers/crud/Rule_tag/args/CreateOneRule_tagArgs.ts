import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_tagCreateInput } from "../../../inputs/Rule_tagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRule_tagArgs {
  @TypeGraphQL.Field(_type => Rule_tagCreateInput, {
    nullable: false
  })
  data!: Rule_tagCreateInput;
}
