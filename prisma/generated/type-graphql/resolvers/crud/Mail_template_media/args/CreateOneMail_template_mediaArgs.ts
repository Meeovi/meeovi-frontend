import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_mediaCreateInput } from "../../../inputs/Mail_template_mediaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMail_template_mediaArgs {
  @TypeGraphQL.Field(_type => Mail_template_mediaCreateInput, {
    nullable: false
  })
  data!: Mail_template_mediaCreateInput;
}
