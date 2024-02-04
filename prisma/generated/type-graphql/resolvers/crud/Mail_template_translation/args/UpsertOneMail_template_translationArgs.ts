import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_translationCreateInput } from "../../../inputs/Mail_template_translationCreateInput";
import { Mail_template_translationUpdateInput } from "../../../inputs/Mail_template_translationUpdateInput";
import { Mail_template_translationWhereUniqueInput } from "../../../inputs/Mail_template_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMail_template_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_translationCreateInput, {
    nullable: false
  })
  create!: Mail_template_translationCreateInput;

  @TypeGraphQL.Field(_type => Mail_template_translationUpdateInput, {
    nullable: false
  })
  update!: Mail_template_translationUpdateInput;
}
