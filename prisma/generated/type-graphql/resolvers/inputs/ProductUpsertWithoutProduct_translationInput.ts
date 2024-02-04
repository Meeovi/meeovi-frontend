import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_translationInput } from "../inputs/ProductCreateWithoutProduct_translationInput";
import { ProductUpdateWithoutProduct_translationInput } from "../inputs/ProductUpdateWithoutProduct_translationInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_translationInput", {})
export class ProductUpsertWithoutProduct_translationInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_translationInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_translationInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_translationInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_translationInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
