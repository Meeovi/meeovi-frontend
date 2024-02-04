import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footer_translationCreateInput } from "../../../inputs/Mail_header_footer_translationCreateInput";
import { Mail_header_footer_translationUpdateInput } from "../../../inputs/Mail_header_footer_translationUpdateInput";
import { Mail_header_footer_translationWhereUniqueInput } from "../../../inputs/Mail_header_footer_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMail_header_footer_translationArgs {
  @TypeGraphQL.Field(_type => Mail_header_footer_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_header_footer_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationCreateInput, {
    nullable: false
  })
  create!: Mail_header_footer_translationCreateInput;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationUpdateInput, {
    nullable: false
  })
  update!: Mail_header_footer_translationUpdateInput;
}
