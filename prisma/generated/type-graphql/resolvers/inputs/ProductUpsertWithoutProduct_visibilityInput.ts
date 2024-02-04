import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_visibilityInput } from "../inputs/ProductCreateWithoutProduct_visibilityInput";
import { ProductUpdateWithoutProduct_visibilityInput } from "../inputs/ProductUpdateWithoutProduct_visibilityInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_visibilityInput", {})
export class ProductUpsertWithoutProduct_visibilityInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_visibilityInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_visibilityInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_visibilityInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_visibilityInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
