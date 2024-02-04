import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_domainWhereInput } from "../../../inputs/Sales_channel_domainWhereInput";

@TypeGraphQL.ArgsType()
export class Sales_channelSales_channel_domain_sales_channel_hreflang_default_domain_idTosales_channel_domainArgs {
  @TypeGraphQL.Field(_type => Sales_channel_domainWhereInput, {
    nullable: true
  })
  where?: Sales_channel_domainWhereInput | undefined;
}
