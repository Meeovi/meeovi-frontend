import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footerWhereInput } from "../../../inputs/Mail_header_footerWhereInput";

@TypeGraphQL.ArgsType()
export class Sales_channelMail_header_footerArgs {
  @TypeGraphQL.Field(_type => Mail_header_footerWhereInput, {
    nullable: true
  })
  where?: Mail_header_footerWhereInput | undefined;
}
