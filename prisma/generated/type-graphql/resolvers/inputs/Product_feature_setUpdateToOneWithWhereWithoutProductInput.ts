import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_setUpdateWithoutProductInput } from "../inputs/Product_feature_setUpdateWithoutProductInput";
import { Product_feature_setWhereInput } from "../inputs/Product_feature_setWhereInput";

@TypeGraphQL.InputType("Product_feature_setUpdateToOneWithWhereWithoutProductInput", {})
export class Product_feature_setUpdateToOneWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_feature_setWhereInput, {
    nullable: true
  })
  where?: Product_feature_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_feature_setUpdateWithoutProductInput;
}
