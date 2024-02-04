import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutTaxInput } from "../inputs/ProductCreateWithoutTaxInput";
import { ProductUpdateWithoutTaxInput } from "../inputs/ProductUpdateWithoutTaxInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutTaxInput", {})
export class ProductUpsertWithWhereUniqueWithoutTaxInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutTaxInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutTaxInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutTaxInput, {
    nullable: false
  })
  create!: ProductCreateWithoutTaxInput;
}
