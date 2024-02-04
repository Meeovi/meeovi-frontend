import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footerCreateOrConnectWithoutSales_channelInput } from "../inputs/Mail_header_footerCreateOrConnectWithoutSales_channelInput";
import { Mail_header_footerCreateWithoutSales_channelInput } from "../inputs/Mail_header_footerCreateWithoutSales_channelInput";
import { Mail_header_footerWhereUniqueInput } from "../inputs/Mail_header_footerWhereUniqueInput";

@TypeGraphQL.InputType("Mail_header_footerCreateNestedOneWithoutSales_channelInput", {})
export class Mail_header_footerCreateNestedOneWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Mail_header_footerCreateWithoutSales_channelInput, {
    nullable: true
  })
  create?: Mail_header_footerCreateWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerCreateOrConnectWithoutSales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Mail_header_footerCreateOrConnectWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerWhereUniqueInput, {
    nullable: true
  })
  connect?: Mail_header_footerWhereUniqueInput | undefined;
}
