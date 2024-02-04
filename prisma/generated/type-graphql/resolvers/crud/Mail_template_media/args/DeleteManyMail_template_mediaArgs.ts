import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_mediaWhereInput } from "../../../inputs/Mail_template_mediaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMail_template_mediaArgs {
  @TypeGraphQL.Field(_type => Mail_template_mediaWhereInput, {
    nullable: true
  })
  where?: Mail_template_mediaWhereInput | undefined;
}
