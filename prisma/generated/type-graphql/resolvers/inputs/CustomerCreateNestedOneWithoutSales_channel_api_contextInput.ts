import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutSales_channel_api_contextInput } from "../inputs/CustomerCreateOrConnectWithoutSales_channel_api_contextInput";
import { CustomerCreateWithoutSales_channel_api_contextInput } from "../inputs/CustomerCreateWithoutSales_channel_api_contextInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutSales_channel_api_contextInput", {})
export class CustomerCreateNestedOneWithoutSales_channel_api_contextInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutSales_channel_api_contextInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutSales_channel_api_contextInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutSales_channel_api_contextInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutSales_channel_api_contextInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
