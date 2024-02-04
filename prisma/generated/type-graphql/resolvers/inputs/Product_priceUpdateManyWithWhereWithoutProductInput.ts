import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceScalarWhereInput } from "../inputs/Product_priceScalarWhereInput";
import { Product_priceUpdateManyMutationInput } from "../inputs/Product_priceUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_priceUpdateManyWithWhereWithoutProductInput", {})
export class Product_priceUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_priceScalarWhereInput, {
    nullable: false
  })
  where!: Product_priceScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_priceUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_priceUpdateManyMutationInput;
}
