import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_custom_field_setInput } from "../inputs/ProductCreateWithoutProduct_custom_field_setInput";
import { ProductUpdateWithoutProduct_custom_field_setInput } from "../inputs/ProductUpdateWithoutProduct_custom_field_setInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_custom_field_setInput", {})
export class ProductUpsertWithoutProduct_custom_field_setInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_custom_field_setInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_custom_field_setInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_custom_field_setInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_custom_field_setInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
