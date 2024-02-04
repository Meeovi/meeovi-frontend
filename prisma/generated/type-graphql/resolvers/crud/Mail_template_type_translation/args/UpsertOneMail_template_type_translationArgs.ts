import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_type_translationCreateInput } from "../../../inputs/Mail_template_type_translationCreateInput";
import { Mail_template_type_translationUpdateInput } from "../../../inputs/Mail_template_type_translationUpdateInput";
import { Mail_template_type_translationWhereUniqueInput } from "../../../inputs/Mail_template_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMail_template_type_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_type_translationCreateInput, {
    nullable: false
  })
  create!: Mail_template_type_translationCreateInput;

  @TypeGraphQL.Field(_type => Mail_template_type_translationUpdateInput, {
    nullable: false
  })
  update!: Mail_template_type_translationUpdateInput;
}
