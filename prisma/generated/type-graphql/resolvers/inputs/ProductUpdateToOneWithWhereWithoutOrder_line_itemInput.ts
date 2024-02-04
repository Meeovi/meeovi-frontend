import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutOrder_line_itemInput } from "../inputs/ProductUpdateWithoutOrder_line_itemInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutOrder_line_itemInput", {})
export class ProductUpdateToOneWithWhereWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrder_line_itemInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutOrder_line_itemInput;
}
