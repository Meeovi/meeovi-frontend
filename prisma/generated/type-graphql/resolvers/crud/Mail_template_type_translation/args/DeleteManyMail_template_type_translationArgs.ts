import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_type_translationWhereInput } from "../../../inputs/Mail_template_type_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMail_template_type_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_type_translationWhereInput, {
    nullable: true
  })
  where?: Mail_template_type_translationWhereInput | undefined;
}
