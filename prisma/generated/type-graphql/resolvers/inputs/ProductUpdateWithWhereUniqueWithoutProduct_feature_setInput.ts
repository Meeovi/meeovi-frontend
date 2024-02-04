import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_feature_setInput } from "../inputs/ProductUpdateWithoutProduct_feature_setInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutProduct_feature_setInput", {})
export class ProductUpdateWithWhereUniqueWithoutProduct_feature_setInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_feature_setInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_feature_setInput;
}
