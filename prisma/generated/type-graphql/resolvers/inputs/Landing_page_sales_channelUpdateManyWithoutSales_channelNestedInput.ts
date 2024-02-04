import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelCreateManySales_channelInputEnvelope } from "../inputs/Landing_page_sales_channelCreateManySales_channelInputEnvelope";
import { Landing_page_sales_channelCreateOrConnectWithoutSales_channelInput } from "../inputs/Landing_page_sales_channelCreateOrConnectWithoutSales_channelInput";
import { Landing_page_sales_channelCreateWithoutSales_channelInput } from "../inputs/Landing_page_sales_channelCreateWithoutSales_channelInput";
import { Landing_page_sales_channelScalarWhereInput } from "../inputs/Landing_page_sales_channelScalarWhereInput";
import { Landing_page_sales_channelUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Landing_page_sales_channelUpdateManyWithWhereWithoutSales_channelInput";
import { Landing_page_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Landing_page_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput";
import { Landing_page_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Landing_page_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput";
import { Landing_page_sales_channelWhereUniqueInput } from "../inputs/Landing_page_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_sales_channelUpdateManyWithoutSales_channelNestedInput", {})
export class Landing_page_sales_channelUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Landing_page_sales_channelCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Landing_page_sales_channelCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Landing_page_sales_channelCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Landing_page_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_page_sales_channelCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereUniqueInput], {
    nullable: true
  })
  set?: Landing_page_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Landing_page_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereUniqueInput], {
    nullable: true
  })
  delete?: Landing_page_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_page_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Landing_page_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Landing_page_sales_channelUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Landing_page_sales_channelScalarWhereInput[] | undefined;
}
