import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutSales_channel_api_contextInput } from "../inputs/CustomerCreateWithoutSales_channel_api_contextInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutSales_channel_api_contextInput", {})
export class CustomerCreateOrConnectWithoutSales_channel_api_contextInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutSales_channel_api_contextInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutSales_channel_api_contextInput;
}
