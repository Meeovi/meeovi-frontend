import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_mediaWhereUniqueInput } from "../../../inputs/Mail_template_mediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMail_template_mediaArgs {
  @TypeGraphQL.Field(_type => Mail_template_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_mediaWhereUniqueInput;
}
