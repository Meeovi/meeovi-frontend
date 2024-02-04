import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_categoryInput } from "../inputs/ProductUpdateWithoutProduct_categoryInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_categoryInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_categoryInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_categoryInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_categoryInput;
}
