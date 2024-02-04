import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_typeCreateInput } from "../../../inputs/Mail_template_typeCreateInput";
import { Mail_template_typeUpdateInput } from "../../../inputs/Mail_template_typeUpdateInput";
import { Mail_template_typeWhereUniqueInput } from "../../../inputs/Mail_template_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMail_template_typeArgs {
  @TypeGraphQL.Field(_type => Mail_template_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_typeCreateInput, {
    nullable: false
  })
  create!: Mail_template_typeCreateInput;

  @TypeGraphQL.Field(_type => Mail_template_typeUpdateInput, {
    nullable: false
  })
  update!: Mail_template_typeUpdateInput;
}
