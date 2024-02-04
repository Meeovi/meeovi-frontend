import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_translationWhereUniqueInput } from "../../../inputs/Mail_template_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMail_template_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_translationWhereUniqueInput;
}
