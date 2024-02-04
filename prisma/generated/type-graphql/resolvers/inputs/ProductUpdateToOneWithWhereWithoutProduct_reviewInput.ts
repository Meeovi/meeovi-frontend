import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_reviewInput } from "../inputs/ProductUpdateWithoutProduct_reviewInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_reviewInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_reviewInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_reviewInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_reviewInput;
}
