import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_typeWhereInput } from "../../../inputs/Mail_template_typeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMail_template_typeArgs {
  @TypeGraphQL.Field(_type => Mail_template_typeWhereInput, {
    nullable: true
  })
  where?: Mail_template_typeWhereInput | undefined;
}
