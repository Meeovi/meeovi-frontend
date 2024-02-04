import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCreateOrConnectWithoutProductInput } from "../inputs/Product_manufacturerCreateOrConnectWithoutProductInput";
import { Product_manufacturerCreateWithoutProductInput } from "../inputs/Product_manufacturerCreateWithoutProductInput";
import { Product_manufacturerWhereUniqueInput } from "../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturerCreateNestedOneWithoutProductInput", {})
export class Product_manufacturerCreateNestedOneWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_manufacturerCreateWithoutProductInput, {
    nullable: true
  })
  create?: Product_manufacturerCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateOrConnectWithoutProductInput, {
    nullable: true
  })
  connectOrCreate?: Product_manufacturerCreateOrConnectWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_manufacturerWhereUniqueInput | undefined;
}
