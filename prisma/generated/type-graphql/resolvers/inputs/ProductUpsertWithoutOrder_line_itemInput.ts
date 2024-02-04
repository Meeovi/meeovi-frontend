import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutOrder_line_itemInput } from "../inputs/ProductCreateWithoutOrder_line_itemInput";
import { ProductUpdateWithoutOrder_line_itemInput } from "../inputs/ProductUpdateWithoutOrder_line_itemInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutOrder_line_itemInput", {})
export class ProductUpsertWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrder_line_itemInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutOrder_line_itemInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutOrder_line_itemInput, {
    nullable: false
  })
  create!: ProductCreateWithoutOrder_line_itemInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
