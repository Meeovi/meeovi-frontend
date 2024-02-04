import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_translationCreateInput } from "../../../inputs/Mail_template_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMail_template_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_translationCreateInput, {
    nullable: false
  })
  data!: Mail_template_translationCreateInput;
}
