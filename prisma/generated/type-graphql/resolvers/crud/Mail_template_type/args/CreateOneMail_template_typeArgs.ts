import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_typeCreateInput } from "../../../inputs/Mail_template_typeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMail_template_typeArgs {
  @TypeGraphQL.Field(_type => Mail_template_typeCreateInput, {
    nullable: false
  })
  data!: Mail_template_typeCreateInput;
}
