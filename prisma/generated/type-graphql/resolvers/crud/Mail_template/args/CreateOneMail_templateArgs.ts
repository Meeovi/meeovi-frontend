import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_templateCreateInput } from "../../../inputs/Mail_templateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMail_templateArgs {
  @TypeGraphQL.Field(_type => Mail_templateCreateInput, {
    nullable: false
  })
  data!: Mail_templateCreateInput;
}
