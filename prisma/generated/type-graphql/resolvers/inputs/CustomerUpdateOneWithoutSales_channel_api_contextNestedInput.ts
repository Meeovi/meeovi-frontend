import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutSales_channel_api_contextInput } from "../inputs/CustomerCreateOrConnectWithoutSales_channel_api_contextInput";
import { CustomerCreateWithoutSales_channel_api_contextInput } from "../inputs/CustomerCreateWithoutSales_channel_api_contextInput";
import { CustomerUpdateToOneWithWhereWithoutSales_channel_api_contextInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutSales_channel_api_contextInput";
import { CustomerUpsertWithoutSales_channel_api_contextInput } from "../inputs/CustomerUpsertWithoutSales_channel_api_contextInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneWithoutSales_channel_api_contextNestedInput", {})
export class CustomerUpdateOneWithoutSales_channel_api_contextNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutSales_channel_api_contextInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutSales_channel_api_contextInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutSales_channel_api_contextInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutSales_channel_api_contextInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutSales_channel_api_contextInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutSales_channel_api_contextInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  disconnect?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  delete?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutSales_channel_api_contextInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutSales_channel_api_contextInput | undefined;
}
