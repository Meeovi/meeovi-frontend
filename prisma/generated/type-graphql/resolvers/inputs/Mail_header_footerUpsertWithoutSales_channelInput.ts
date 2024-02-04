import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footerCreateWithoutSales_channelInput } from "../inputs/Mail_header_footerCreateWithoutSales_channelInput";
import { Mail_header_footerUpdateWithoutSales_channelInput } from "../inputs/Mail_header_footerUpdateWithoutSales_channelInput";
import { Mail_header_footerWhereInput } from "../inputs/Mail_header_footerWhereInput";

@TypeGraphQL.InputType("Mail_header_footerUpsertWithoutSales_channelInput", {})
export class Mail_header_footerUpsertWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Mail_header_footerUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: Mail_header_footerUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => Mail_header_footerCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Mail_header_footerCreateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => Mail_header_footerWhereInput, {
    nullable: true
  })
  where?: Mail_header_footerWhereInput | undefined;
}
