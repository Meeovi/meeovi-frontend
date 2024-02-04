import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_templateUpdateInput } from "../../../inputs/Mail_templateUpdateInput";
import { Mail_templateWhereUniqueInput } from "../../../inputs/Mail_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMail_templateArgs {
  @TypeGraphQL.Field(_type => Mail_templateUpdateInput, {
    nullable: false
  })
  data!: Mail_templateUpdateInput;

  @TypeGraphQL.Field(_type => Mail_templateWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_templateWhereUniqueInput;
}
