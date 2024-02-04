import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_propertyInput } from "../inputs/ProductUpdateWithoutProduct_propertyInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_propertyInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_propertyInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_propertyInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_propertyInput;
}
