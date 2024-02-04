import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportCreateManySales_channel_domainInputEnvelope } from "../inputs/Product_exportCreateManySales_channel_domainInputEnvelope";
import { Product_exportCreateOrConnectWithoutSales_channel_domainInput } from "../inputs/Product_exportCreateOrConnectWithoutSales_channel_domainInput";
import { Product_exportCreateWithoutSales_channel_domainInput } from "../inputs/Product_exportCreateWithoutSales_channel_domainInput";
import { Product_exportWhereUniqueInput } from "../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.InputType("Product_exportCreateNestedManyWithoutSales_channel_domainInput", {})
export class Product_exportCreateNestedManyWithoutSales_channel_domainInput {
  @TypeGraphQL.Field(_type => [Product_exportCreateWithoutSales_channel_domainInput], {
    nullable: true
  })
  create?: Product_exportCreateWithoutSales_channel_domainInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportCreateOrConnectWithoutSales_channel_domainInput], {
    nullable: true
  })
  connectOrCreate?: Product_exportCreateOrConnectWithoutSales_channel_domainInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_exportCreateManySales_channel_domainInputEnvelope, {
    nullable: true
  })
  createMany?: Product_exportCreateManySales_channel_domainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_exportWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_exportWhereUniqueInput[] | undefined;
}
