import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutMain_categoryInput } from "../inputs/ProductUpdateWithoutMain_categoryInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutMain_categoryInput", {})
export class ProductUpdateToOneWithWhereWithoutMain_categoryInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutMain_categoryInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutMain_categoryInput;
}
