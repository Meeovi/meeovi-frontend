import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturer_translationCreateWithoutProduct_manufacturerInput } from "../inputs/Product_manufacturer_translationCreateWithoutProduct_manufacturerInput";
import { Product_manufacturer_translationWhereUniqueInput } from "../inputs/Product_manufacturer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturer_translationCreateOrConnectWithoutProduct_manufacturerInput", {})
export class Product_manufacturer_translationCreateOrConnectWithoutProduct_manufacturerInput {
  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_manufacturer_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationCreateWithoutProduct_manufacturerInput, {
    nullable: false
  })
  create!: Product_manufacturer_translationCreateWithoutProduct_manufacturerInput;
}
