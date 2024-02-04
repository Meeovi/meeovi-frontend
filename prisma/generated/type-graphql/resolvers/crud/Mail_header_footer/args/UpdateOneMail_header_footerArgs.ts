import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footerUpdateInput } from "../../../inputs/Mail_header_footerUpdateInput";
import { Mail_header_footerWhereUniqueInput } from "../../../inputs/Mail_header_footerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMail_header_footerArgs {
  @TypeGraphQL.Field(_type => Mail_header_footerUpdateInput, {
    nullable: false
  })
  data!: Mail_header_footerUpdateInput;

  @TypeGraphQL.Field(_type => Mail_header_footerWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_header_footerWhereUniqueInput;
}
