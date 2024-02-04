import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_templateWhereUniqueInput } from "../../../inputs/Mail_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMail_templateArgs {
  @TypeGraphQL.Field(_type => Mail_templateWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_templateWhereUniqueInput;
}
