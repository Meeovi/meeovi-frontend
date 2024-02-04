import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerUpdateWithoutProduct_manufacturer_translationInput } from "../inputs/Product_manufacturerUpdateWithoutProduct_manufacturer_translationInput";
import { Product_manufacturerWhereInput } from "../inputs/Product_manufacturerWhereInput";

@TypeGraphQL.InputType("Product_manufacturerUpdateToOneWithWhereWithoutProduct_manufacturer_translationInput", {})
export class Product_manufacturerUpdateToOneWithWhereWithoutProduct_manufacturer_translationInput {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  where?: Product_manufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerUpdateWithoutProduct_manufacturer_translationInput, {
    nullable: false
  })
  data!: Product_manufacturerUpdateWithoutProduct_manufacturer_translationInput;
}
