import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footerWhereUniqueInput } from "../../../inputs/Mail_header_footerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMail_header_footerOrThrowArgs {
  @TypeGraphQL.Field(_type => Mail_header_footerWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_header_footerWhereUniqueInput;
}
