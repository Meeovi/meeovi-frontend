import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutSales_channel_api_contextInput } from "../inputs/CustomerCreateWithoutSales_channel_api_contextInput";
import { CustomerUpdateWithoutSales_channel_api_contextInput } from "../inputs/CustomerUpdateWithoutSales_channel_api_contextInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutSales_channel_api_contextInput", {})
export class CustomerUpsertWithoutSales_channel_api_contextInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutSales_channel_api_contextInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutSales_channel_api_contextInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutSales_channel_api_contextInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutSales_channel_api_contextInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
