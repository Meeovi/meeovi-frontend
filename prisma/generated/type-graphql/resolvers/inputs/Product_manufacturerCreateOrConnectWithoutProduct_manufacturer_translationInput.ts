import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCreateWithoutProduct_manufacturer_translationInput } from "../inputs/Product_manufacturerCreateWithoutProduct_manufacturer_translationInput";
import { Product_manufacturerWhereUniqueInput } from "../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturerCreateOrConnectWithoutProduct_manufacturer_translationInput", {})
export class Product_manufacturerCreateOrConnectWithoutProduct_manufacturer_translationInput {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: Product_manufacturerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateWithoutProduct_manufacturer_translationInput, {
    nullable: false
  })
  create!: Product_manufacturerCreateWithoutProduct_manufacturer_translationInput;
}
