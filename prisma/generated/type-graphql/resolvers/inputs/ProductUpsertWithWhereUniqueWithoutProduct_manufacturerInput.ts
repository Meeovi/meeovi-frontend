import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_manufacturerInput } from "../inputs/ProductCreateWithoutProduct_manufacturerInput";
import { ProductUpdateWithoutProduct_manufacturerInput } from "../inputs/ProductUpdateWithoutProduct_manufacturerInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutProduct_manufacturerInput", {})
export class ProductUpsertWithWhereUniqueWithoutProduct_manufacturerInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_manufacturerInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_manufacturerInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_manufacturerInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_manufacturerInput;
}
