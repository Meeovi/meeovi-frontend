import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCreateOrConnectWithoutProduct_manufacturer_translationInput } from "../inputs/Product_manufacturerCreateOrConnectWithoutProduct_manufacturer_translationInput";
import { Product_manufacturerCreateWithoutProduct_manufacturer_translationInput } from "../inputs/Product_manufacturerCreateWithoutProduct_manufacturer_translationInput";
import { Product_manufacturerWhereUniqueInput } from "../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturerCreateNestedOneWithoutProduct_manufacturer_translationInput", {})
export class Product_manufacturerCreateNestedOneWithoutProduct_manufacturer_translationInput {
  @TypeGraphQL.Field(_type => Product_manufacturerCreateWithoutProduct_manufacturer_translationInput, {
    nullable: true
  })
  create?: Product_manufacturerCreateWithoutProduct_manufacturer_translationInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateOrConnectWithoutProduct_manufacturer_translationInput, {
    nullable: true
  })
  connectOrCreate?: Product_manufacturerCreateOrConnectWithoutProduct_manufacturer_translationInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_manufacturerWhereUniqueInput | undefined;
}
