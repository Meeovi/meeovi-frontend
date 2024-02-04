import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_downloadInput } from "../inputs/ProductUpdateWithoutProduct_downloadInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_downloadInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_downloadInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_downloadInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_downloadInput;
}
