import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footerCreateInput } from "../../../inputs/Mail_header_footerCreateInput";
import { Mail_header_footerUpdateInput } from "../../../inputs/Mail_header_footerUpdateInput";
import { Mail_header_footerWhereUniqueInput } from "../../../inputs/Mail_header_footerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMail_header_footerArgs {
  @TypeGraphQL.Field(_type => Mail_header_footerWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_header_footerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_header_footerCreateInput, {
    nullable: false
  })
  create!: Mail_header_footerCreateInput;

  @TypeGraphQL.Field(_type => Mail_header_footerUpdateInput, {
    nullable: false
  })
  update!: Mail_header_footerUpdateInput;
}
