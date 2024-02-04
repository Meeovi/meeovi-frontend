import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_tagWhereInput } from "../../../inputs/Rule_tagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRule_tagArgs {
  @TypeGraphQL.Field(_type => Rule_tagWhereInput, {
    nullable: true
  })
  where?: Rule_tagWhereInput | undefined;
}
