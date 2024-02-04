import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportCreateManySales_channel_domainInputEnvelope } from "../inputs/Product_exportCreateManySales_channel_domainInputEnvelope";
import { Product_exportCreateOrConnectWithoutSales_channel_domainInput } from "../inputs/Product_exportCreateOrConnectWithoutSales_channel_domainInput";
import { Product_exportCreateWithoutSales_channel_domainInput } from "../inputs/Product_exportCreateWithoutSales_channel_domainInput";
import { Product_exportScalarWhereInput } from "../inputs/Product_exportScalarWhereInput";
import { Product_exportUpdateManyWithWhereWithoutSales_channel_domainInput } from "../inputs/Product_exportUpdateManyWithWhereWithoutSales_channel_domainInput";
import { Product_exportUpdateWithWhereUniqueWithoutSales_channel_domainInput } from "../inputs/Product_exportUpdateWithWhereUniqueWithoutSales_channel_domainInput";
import { Product_exportUpsertWithWhereUniqueWithoutSales_channel_domainInput } from "../inputs/Product_exportUpsertWithWhereUniqueWithoutSales_channel_domainInput";
import { Product_exportWhereUniqueInput } from "../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.InputType("Product_exportUpdateManyWithoutSales_channel_domainNestedInput", {})
export class Product_exportUpdateManyWithoutSales_channel_domainNestedInput {
  @TypeGraphQL.Field(_type => [Product_exportCreateWithoutSales_channel_domainInput], {
    nullable: true
  })
  create?: Product_exportCreateWithoutSales_channel_domainInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportCreateOrConnectWithoutSales_channel_domainInput], {
    nullable: true
  })
  connectOrCreate?: Product_exportCreateOrConnectWithoutSales_channel_domainInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportUpsertWithWhereUniqueWithoutSales_channel_domainInput], {
    nullable: true
  })
  upsert?: Product_exportUpsertWithWhereUniqueWithoutSales_channel_domainInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_exportCreateManySales_channel_domainInputEnvelope, {
    nullable: true
  })
  createMany?: Product_exportCreateManySales_channel_domainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_exportWhereUniqueInput], {
    nullable: true
  })
  set?: Product_exportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_exportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_exportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_exportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportUpdateWithWhereUniqueWithoutSales_channel_domainInput], {
    nullable: true
  })
  update?: Product_exportUpdateWithWhereUniqueWithoutSales_channel_domainInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportUpdateManyWithWhereWithoutSales_channel_domainInput], {
    nullable: true
  })
  updateMany?: Product_exportUpdateManyWithWhereWithoutSales_channel_domainInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_exportScalarWhereInput[] | undefined;
}
