import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footer_translationCreateInput } from "../../../inputs/Mail_header_footer_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMail_header_footer_translationArgs {
  @TypeGraphQL.Field(_type => Mail_header_footer_translationCreateInput, {
    nullable: false
  })
  data!: Mail_header_footer_translationCreateInput;
}
