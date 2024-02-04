import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_setCreateOrConnectWithoutProductInput } from "../inputs/Product_feature_setCreateOrConnectWithoutProductInput";
import { Product_feature_setCreateWithoutProductInput } from "../inputs/Product_feature_setCreateWithoutProductInput";
import { Product_feature_setWhereUniqueInput } from "../inputs/Product_feature_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_feature_setCreateNestedOneWithoutProductInput", {})
export class Product_feature_setCreateNestedOneWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_feature_setCreateWithoutProductInput, {
    nullable: true
  })
  create?: Product_feature_setCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setCreateOrConnectWithoutProductInput, {
    nullable: true
  })
  connectOrCreate?: Product_feature_setCreateOrConnectWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_feature_setWhereUniqueInput | undefined;
}
