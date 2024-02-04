import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_templateCreateInput } from "../../../inputs/Mail_templateCreateInput";
import { Mail_templateUpdateInput } from "../../../inputs/Mail_templateUpdateInput";
import { Mail_templateWhereUniqueInput } from "../../../inputs/Mail_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMail_templateArgs {
  @TypeGraphQL.Field(_type => Mail_templateWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_templateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_templateCreateInput, {
    nullable: false
  })
  create!: Mail_templateCreateInput;

  @TypeGraphQL.Field(_type => Mail_templateUpdateInput, {
    nullable: false
  })
  update!: Mail_templateUpdateInput;
}
