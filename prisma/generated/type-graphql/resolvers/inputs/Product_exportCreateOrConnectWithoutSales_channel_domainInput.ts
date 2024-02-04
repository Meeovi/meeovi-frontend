import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportCreateWithoutSales_channel_domainInput } from "../inputs/Product_exportCreateWithoutSales_channel_domainInput";
import { Product_exportWhereUniqueInput } from "../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.InputType("Product_exportCreateOrConnectWithoutSales_channel_domainInput", {})
export class Product_exportCreateOrConnectWithoutSales_channel_domainInput {
  @TypeGraphQL.Field(_type => Product_exportWhereUniqueInput, {
    nullable: false
  })
  where!: Product_exportWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_exportCreateWithoutSales_channel_domainInput, {
    nullable: false
  })
  create!: Product_exportCreateWithoutSales_channel_domainInput;
}
