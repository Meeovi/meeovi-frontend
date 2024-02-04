import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_setCreateOrConnectWithoutProduct_feature_set_translationInput } from "../inputs/Product_feature_setCreateOrConnectWithoutProduct_feature_set_translationInput";
import { Product_feature_setCreateWithoutProduct_feature_set_translationInput } from "../inputs/Product_feature_setCreateWithoutProduct_feature_set_translationInput";
import { Product_feature_setUpdateToOneWithWhereWithoutProduct_feature_set_translationInput } from "../inputs/Product_feature_setUpdateToOneWithWhereWithoutProduct_feature_set_translationInput";
import { Product_feature_setUpsertWithoutProduct_feature_set_translationInput } from "../inputs/Product_feature_setUpsertWithoutProduct_feature_set_translationInput";
import { Product_feature_setWhereUniqueInput } from "../inputs/Product_feature_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_feature_setUpdateOneRequiredWithoutProduct_feature_set_translationNestedInput", {})
export class Product_feature_setUpdateOneRequiredWithoutProduct_feature_set_translationNestedInput {
  @TypeGraphQL.Field(_type => Product_feature_setCreateWithoutProduct_feature_set_translationInput, {
    nullable: true
  })
  create?: Product_feature_setCreateWithoutProduct_feature_set_translationInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setCreateOrConnectWithoutProduct_feature_set_translationInput, {
    nullable: true
  })
  connectOrCreate?: Product_feature_setCreateOrConnectWithoutProduct_feature_set_translationInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setUpsertWithoutProduct_feature_set_translationInput, {
    nullable: true
  })
  upsert?: Product_feature_setUpsertWithoutProduct_feature_set_translationInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_feature_setWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setUpdateToOneWithWhereWithoutProduct_feature_set_translationInput, {
    nullable: true
  })
  update?: Product_feature_setUpdateToOneWithWhereWithoutProduct_feature_set_translationInput | undefined;
}
