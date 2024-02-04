import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationCreateManyCategoryInputEnvelope } from "../inputs/Category_translationCreateManyCategoryInputEnvelope";
import { Category_translationCreateOrConnectWithoutCategoryInput } from "../inputs/Category_translationCreateOrConnectWithoutCategoryInput";
import { Category_translationCreateWithoutCategoryInput } from "../inputs/Category_translationCreateWithoutCategoryInput";
import { Category_translationScalarWhereInput } from "../inputs/Category_translationScalarWhereInput";
import { Category_translationUpdateManyWithWhereWithoutCategoryInput } from "../inputs/Category_translationUpdateManyWithWhereWithoutCategoryInput";
import { Category_translationUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/Category_translationUpdateWithWhereUniqueWithoutCategoryInput";
import { Category_translationUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/Category_translationUpsertWithWhereUniqueWithoutCategoryInput";
import { Category_translationWhereUniqueInput } from "../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.InputType("Category_translationUpdateManyWithoutCategoryNestedInput", {})
export class Category_translationUpdateManyWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => [Category_translationCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Category_translationCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Category_translationCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: Category_translationUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Category_translationCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Category_translationCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Category_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Category_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Category_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Category_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Category_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: Category_translationUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: Category_translationUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Category_translationScalarWhereInput[] | undefined;
}
