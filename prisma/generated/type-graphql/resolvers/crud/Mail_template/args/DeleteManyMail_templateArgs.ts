import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_templateWhereInput } from "../../../inputs/Mail_templateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMail_templateArgs {
  @TypeGraphQL.Field(_type => Mail_templateWhereInput, {
    nullable: true
  })
  where?: Mail_templateWhereInput | undefined;
}
