import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_type_translationCreateInput } from "../../../inputs/Mail_template_type_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMail_template_type_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_type_translationCreateInput, {
    nullable: false
  })
  data!: Mail_template_type_translationCreateInput;
}
