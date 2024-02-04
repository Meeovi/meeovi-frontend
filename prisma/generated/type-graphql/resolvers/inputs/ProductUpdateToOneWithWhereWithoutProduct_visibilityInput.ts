import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_visibilityInput } from "../inputs/ProductUpdateWithoutProduct_visibilityInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_visibilityInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_visibilityInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_visibilityInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_visibilityInput;
}
