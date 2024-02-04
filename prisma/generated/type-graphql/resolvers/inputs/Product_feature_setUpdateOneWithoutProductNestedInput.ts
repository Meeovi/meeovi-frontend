import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_setCreateOrConnectWithoutProductInput } from "../inputs/Product_feature_setCreateOrConnectWithoutProductInput";
import { Product_feature_setCreateWithoutProductInput } from "../inputs/Product_feature_setCreateWithoutProductInput";
import { Product_feature_setUpdateToOneWithWhereWithoutProductInput } from "../inputs/Product_feature_setUpdateToOneWithWhereWithoutProductInput";
import { Product_feature_setUpsertWithoutProductInput } from "../inputs/Product_feature_setUpsertWithoutProductInput";
import { Product_feature_setWhereInput } from "../inputs/Product_feature_setWhereInput";
import { Product_feature_setWhereUniqueInput } from "../inputs/Product_feature_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_feature_setUpdateOneWithoutProductNestedInput", {})
export class Product_feature_setUpdateOneWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => Product_feature_setCreateWithoutProductInput, {
    nullable: true
  })
  create?: Product_feature_setCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setCreateOrConnectWithoutProductInput, {
    nullable: true
  })
  connectOrCreate?: Product_feature_setCreateOrConnectWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setUpsertWithoutProductInput, {
    nullable: true
  })
  upsert?: Product_feature_setUpsertWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setWhereInput, {
    nullable: true
  })
  disconnect?: Product_feature_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setWhereInput, {
    nullable: true
  })
  delete?: Product_feature_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_feature_setWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setUpdateToOneWithWhereWithoutProductInput, {
    nullable: true
  })
  update?: Product_feature_setUpdateToOneWithWhereWithoutProductInput | undefined;
}
