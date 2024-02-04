import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_typeUpdateInput } from "../../../inputs/Mail_template_typeUpdateInput";
import { Mail_template_typeWhereUniqueInput } from "../../../inputs/Mail_template_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMail_template_typeArgs {
  @TypeGraphQL.Field(_type => Mail_template_typeUpdateInput, {
    nullable: false
  })
  data!: Mail_template_typeUpdateInput;

  @TypeGraphQL.Field(_type => Mail_template_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_typeWhereUniqueInput;
}
