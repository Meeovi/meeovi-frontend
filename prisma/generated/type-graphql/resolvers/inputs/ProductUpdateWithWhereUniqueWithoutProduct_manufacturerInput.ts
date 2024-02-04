import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_manufacturerInput } from "../inputs/ProductUpdateWithoutProduct_manufacturerInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutProduct_manufacturerInput", {})
export class ProductUpdateWithWhereUniqueWithoutProduct_manufacturerInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_manufacturerInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_manufacturerInput;
}
