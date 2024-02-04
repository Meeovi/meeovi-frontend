import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_custom_field_setInput } from "../inputs/ProductUpdateWithoutProduct_custom_field_setInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_custom_field_setInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_custom_field_setInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_custom_field_setInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_custom_field_setInput;
}
