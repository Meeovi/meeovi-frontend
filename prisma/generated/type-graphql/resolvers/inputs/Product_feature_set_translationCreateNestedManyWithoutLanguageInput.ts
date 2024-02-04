import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_feature_set_translationCreateManyLanguageInputEnvelope";
import { Product_feature_set_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_feature_set_translationCreateOrConnectWithoutLanguageInput";
import { Product_feature_set_translationCreateWithoutLanguageInput } from "../inputs/Product_feature_set_translationCreateWithoutLanguageInput";
import { Product_feature_set_translationWhereUniqueInput } from "../inputs/Product_feature_set_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_feature_set_translationCreateNestedManyWithoutLanguageInput", {})
export class Product_feature_set_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Product_feature_set_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_feature_set_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_feature_set_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_feature_set_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_feature_set_translationWhereUniqueInput[] | undefined;
}
