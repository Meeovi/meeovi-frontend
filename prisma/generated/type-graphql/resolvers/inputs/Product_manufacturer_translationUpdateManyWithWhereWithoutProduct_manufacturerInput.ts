import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturer_translationScalarWhereInput } from "../inputs/Product_manufacturer_translationScalarWhereInput";
import { Product_manufacturer_translationUpdateManyMutationInput } from "../inputs/Product_manufacturer_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_manufacturer_translationUpdateManyWithWhereWithoutProduct_manufacturerInput", {})
export class Product_manufacturer_translationUpdateManyWithWhereWithoutProduct_manufacturerInput {
  @TypeGraphQL.Field(_type => Product_manufacturer_translationScalarWhereInput, {
    nullable: false
  })
  where!: Product_manufacturer_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_manufacturer_translationUpdateManyMutationInput;
}
