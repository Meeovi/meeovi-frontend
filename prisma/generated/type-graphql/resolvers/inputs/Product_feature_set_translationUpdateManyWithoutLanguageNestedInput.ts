import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_feature_set_translationCreateManyLanguageInputEnvelope";
import { Product_feature_set_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_feature_set_translationCreateOrConnectWithoutLanguageInput";
import { Product_feature_set_translationCreateWithoutLanguageInput } from "../inputs/Product_feature_set_translationCreateWithoutLanguageInput";
import { Product_feature_set_translationScalarWhereInput } from "../inputs/Product_feature_set_translationScalarWhereInput";
import { Product_feature_set_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Product_feature_set_translationUpdateManyWithWhereWithoutLanguageInput";
import { Product_feature_set_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_feature_set_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Product_feature_set_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_feature_set_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Product_feature_set_translationWhereUniqueInput } from "../inputs/Product_feature_set_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_feature_set_translationUpdateManyWithoutLanguageNestedInput", {})
export class Product_feature_set_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Product_feature_set_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_feature_set_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_feature_set_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Product_feature_set_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_feature_set_translationCreateManyLanguageInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Product_feature_set_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Product_feature_set_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Product_feature_set_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_feature_set_translationScalarWhereInput[] | undefined;
}
