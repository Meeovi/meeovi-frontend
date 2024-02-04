import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_type_translationWhereUniqueInput } from "../../../inputs/Mail_template_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMail_template_type_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_type_translationWhereUniqueInput;
}
