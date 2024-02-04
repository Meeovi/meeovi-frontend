import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footerCreateInput } from "../../../inputs/Mail_header_footerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMail_header_footerArgs {
  @TypeGraphQL.Field(_type => Mail_header_footerCreateInput, {
    nullable: false
  })
  data!: Mail_header_footerCreateInput;
}
