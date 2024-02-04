import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutUnitInput } from "../inputs/ProductCreateWithoutUnitInput";
import { ProductUpdateWithoutUnitInput } from "../inputs/ProductUpdateWithoutUnitInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutUnitInput", {})
export class ProductUpsertWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutUnitInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutUnitInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutUnitInput, {
    nullable: false
  })
  create!: ProductCreateWithoutUnitInput;
}
