import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationCreateManyProduct_feature_setInputEnvelope } from "../inputs/Product_feature_set_translationCreateManyProduct_feature_setInputEnvelope";
import { Product_feature_set_translationCreateOrConnectWithoutProduct_feature_setInput } from "../inputs/Product_feature_set_translationCreateOrConnectWithoutProduct_feature_setInput";
import { Product_feature_set_translationCreateWithoutProduct_feature_setInput } from "../inputs/Product_feature_set_translationCreateWithoutProduct_feature_setInput";
import { Product_feature_set_translationScalarWhereInput } from "../inputs/Product_feature_set_translationScalarWhereInput";
import { Product_feature_set_translationUpdateManyWithWhereWithoutProduct_feature_setInput } from "../inputs/Product_feature_set_translationUpdateManyWithWhereWithoutProduct_feature_setInput";
import { Product_feature_set_translationUpdateWithWhereUniqueWithoutProduct_feature_setInput } from "../inputs/Product_feature_set_translationUpdateWithWhereUniqueWithoutProduct_feature_setInput";
import { Product_feature_set_translationUpsertWithWhereUniqueWithoutProduct_feature_setInput } from "../inputs/Product_feature_set_translationUpsertWithWhereUniqueWithoutProduct_feature_setInput";
import { Product_feature_set_translationWhereUniqueInput } from "../inputs/Product_feature_set_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_feature_set_translationUpdateManyWithoutProduct_feature_setNestedInput", {})
export class Product_feature_set_translationUpdateManyWithoutProduct_feature_setNestedInput {
  @TypeGraphQL.Field(_type => [Product_feature_set_translationCreateWithoutProduct_feature_setInput], {
    nullable: true
  })
  create?: Product_feature_set_translationCreateWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationCreateOrConnectWithoutProduct_feature_setInput], {
    nullable: true
  })
  connectOrCreate?: Product_feature_set_translationCreateOrConnectWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationUpsertWithWhereUniqueWithoutProduct_feature_setInput], {
    nullable: true
  })
  upsert?: Product_feature_set_translationUpsertWithWhereUniqueWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationCreateManyProduct_feature_setInputEnvelope, {
    nullable: true
  })
  createMany?: Product_feature_set_translationCreateManyProduct_feature_setInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Product_feature_set_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_feature_set_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_feature_set_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_feature_set_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationUpdateWithWhereUniqueWithoutProduct_feature_setInput], {
    nullable: true
  })
  update?: Product_feature_set_translationUpdateWithWhereUniqueWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationUpdateManyWithWhereWithoutProduct_feature_setInput], {
    nullable: true
  })
  updateMany?: Product_feature_set_translationUpdateManyWithWhereWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_feature_set_translationScalarWhereInput[] | undefined;
}
