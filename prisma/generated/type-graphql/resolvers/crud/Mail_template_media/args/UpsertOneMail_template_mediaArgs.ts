import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_mediaCreateInput } from "../../../inputs/Mail_template_mediaCreateInput";
import { Mail_template_mediaUpdateInput } from "../../../inputs/Mail_template_mediaUpdateInput";
import { Mail_template_mediaWhereUniqueInput } from "../../../inputs/Mail_template_mediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMail_template_mediaArgs {
  @TypeGraphQL.Field(_type => Mail_template_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_mediaCreateInput, {
    nullable: false
  })
  create!: Mail_template_mediaCreateInput;

  @TypeGraphQL.Field(_type => Mail_template_mediaUpdateInput, {
    nullable: false
  })
  update!: Mail_template_mediaUpdateInput;
}
